import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductsDetails, removeProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ShowItem = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;


    useEffect(()=>{
        if(product && match.params.id !== product._id){
            dispatch(getProductsDetails(match.params.id))
        }
    }, [dispatch, product,match])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id))
        history.push("/cart")
    }

    return(
        <div className="showpage">
             {loading ? ( <h2>Loading</h2> ) : error ? ( <h2>{error}</h2> ) : (
             <>
             <div className="product-list">
                <div key={product.productId}>
                    <div className="product">

                        <div className="product-name">
                                {product.name}
                        </div>

                        <div className="product-description">
                            {product.description}
                        </div>

                        <div className="product-price">
                            $ {product.price}
                        </div>

                        <div className="product-image">
                            <img src={product.image} alt={product.name}/>
                        </div>

                        <div className="product-size">
                            {product.size}
                        </div>
                    </div>
                    <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                </div>
            </div>
             </>
             )}
        </div>
    )
}
export default ShowItem 