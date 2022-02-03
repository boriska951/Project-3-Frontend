import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import './Editpage.css'

let baseUrl = 'https://bromeliad-boutique-backend.herokuapp.com'

class Editpage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      modalOpen: false,
      itemToBeEdited:{},
      description:'',
      name: '',
      image: '',
      price: '',
      size: ''
    }
  }

  getItems = () => {
    fetch(baseUrl)
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log(data)
      this.setState({ items: data })
    })
  }

  addItems = (newItem) => {
    const copyItems = [...this.state.items]
    copyItems.push(newItem)
    this.setState({
      items:copyItems
    })
  }

  deleteItem = (id) => {
    fetch(baseUrl+'/'+id,{
      method: 'DELETE'
    }).then(res => {
      const findIndex = this.state.items.findIndex(item => item._id === id)
      const copyItems = [...this.state.items]
      copyItems.splice(findIndex, 1)
      this.setState({
        items: copyItems
      })
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const url = baseUrl + '/' + this.state.itemToBeEdited._id
    console.log(this.state.itemToBeEdited._id)
    console.log(url)
    try{
      const response = await fetch( url , {
        method: 'PUT',
        body: JSON.stringify({
          name: e.target.name.value,
          description: e.target.description.value,
          image: e.target.image.value,
          price: e.target.price.value,
          size: e.target.size.value
        }),
        headers: {
          'Content-Type' : 'application/json'
        },

      })

      if (response.status === 200){
        const updatedItem = await response.json()
        const findIndex = this.state.items.findIndex(item => item._id === updatedItem._id)
        const copyItems = [...this.state.items]
        copyItems[findIndex] = updatedItem
        this.setState({
          items: copyItems,
          modalOpen:false
        })
      }
    }
    catch(err){
      console.log('Error => ', err);
    }
  }

 handleChange = (e)=>{
   this.setState({
     [e.target.name]: e.target.value
   })
 }

  showEditForm = (item)=>{
    this.setState({
      modalOpen:true,
      name: item.name,
      description: item.description,
      image: item.image,
      size: item.size,
      price: item.price,
      itemToBeEdited: item
    })
  }
  componentDidMount() {
    this.getItems()
  }

  render() {
    return (
        <div>
        <main className="main">
            <div className="product-page">
                <ul className="product-list">
                { this.state.items.map((item, i) => {
                return (
                    <li key={item._id}>
                        <div className="product">

                            <div className="product-name">
                                <Link to={"/show/" + item._id}>
                                    {item.name}
                                </Link>
                            </div>

                            <div className="product-description">
                                {item.description}
                            </div>

                            <div className="product-price">
                                {item.price}
                            </div>

                            <div className="product-image">
                                <img src={item.image} alt="item"/>
                            </div>

                            <div className="product-size">
                                {item.size}
                            </div>
                            <button onClick={() => this.deleteItem(item._id)}>Delete</button>
                            <button onClick={() => { this.showEditForm(item)}}>Show Edit Form</button>
                        </div>
                    </li>
                    )
                  })
                }
                </ul>
                {
               this.state.modalOpen &&

               <form className="editForm" onSubmit={this.handleSubmit}>
                 <label>Name: </label>
                 <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/> <br/>

                 <label>Description: </label>
                 <input name="description" type="text" value={this.state.description} onChange={this.handleChange}/>

                 <label>Image: </label>
                 <input name="image" type="text" value={this.state.image} onChange={this.handleChange}/>

                 <label>Size: </label>
                 <input name="size" type="text" value={this.state.size} onChange={this.handleChange}/>

                 <label>Price: </label>
                 <input name="price" type="text" value={this.state.price} onChange={this.handleChange}/>

                 <button type="submit">update</button>

               </form>
             }
            </div>
        </main>
        <footer className="footer">
            Group 6, SEI-Bromeliad.
        </footer>
    </div>

    );
  }
}


export default Editpage;