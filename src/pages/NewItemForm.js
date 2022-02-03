import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import './NewItemForm.css'

class NewItemForm extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: "",
            description: "",
            image: "",
            price: "",
            size: "",
            category: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.description]: event.target.value,
            [event.target.image]: event.target.value,
            [event.target.price]: event.target.value,
            [event.target.size]: event.target.value,
            [event.target.category]: event.target.value
        })
    }

    addItems = (newItem) => {
        const copyItems = [...this.state.items]
        copyItems.push(newItem)
        this.setState({
          items:copyItems
        })
      }
    

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(this.props.baseUrl,{
            method: "POST",
            body: JSON.stringify({
                name:this.state.name, 
                description: this.state.description,
                image: this.state.image,
                price: this.state.price,
                size: this.state.size,
                category: this.state.category
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            this.props.addItems(data)
            this.setState({
                name: '',
                description: '',
                image: '',
                price: '',
                size: '',
                category: ''
            })
        }).catch (error => console.error({'ERROR': error}))
        this.props.history.push('/')
    }

    render() {
        return(
            <form className="newform" onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={(e)=> this.handleChange(e)} value={this.state.name}></input>
                
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" onChange={(e)=> this.handleChange(e)} value={this.state.description}></input>

                <label htmlFor="image">Image:</label>
                <input type="text" id="image" name="image" onChange={(e)=> this.handleChange(e)} value={this.state.image}></input>

                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" onChange={(e)=> this.handleChange(e)} value={this.state.price}></input>

                <label htmlFor="size">Size:</label>
                <input type="text" id="size" name="size" onChange={(e)=> this.handleChange(e)} value={this.state.size}></input>

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" onChange={(e)=> this.handleChange(e)} value={this.state.category}></input>

                <input type="submit" value="Add Item"></input>
            </form>
        )
    }
}

export default withRouter(NewItemForm)