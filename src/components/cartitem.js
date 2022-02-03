import {Link} from 'react-router-dom'

const CartItem = ({item, remove}) => {
    return (
        <>
        <div className="product-name">
            <Link to={"/show/" + item.productId}>
                {item.name}
            </Link>
        </div>
        <div className="product-description">
            {item.description}
        </div>
        <div className="product-price">
            $ {item.price}
        </div>
        <div className="product-image">
            <img src={item.image} alt={item.name} />
        </div>
        <div className="product-size">
            {item.size}
        </div>
        <button onClick={()=> remove(item.product)}>
            Remove
        </button>
        </>
    )
}

export default CartItem