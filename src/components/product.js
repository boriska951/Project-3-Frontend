import {Link} from 'react-router-dom'

const Product = ({name,description,image,price,size,productId}) => {



    return (
        <div className="product-list">
            <li key={productId}>
                <div className="product">

                    <div className="product-name">
                        <Link to={"/show/" + productId}>
                            {name}
                        </Link>
                    </div>

                    <div className="product-description">
                        {description}
                    </div>

                    <div className="product-price">
                        $ {price}
                    </div>

                    <div className="product-image">
                        <img src={image} alt={name}/>
                    </div>

                    <div className="product-size">
                        {size}
                    </div>
                 </div>
            </li>
        </div>
    )
}


export default Product