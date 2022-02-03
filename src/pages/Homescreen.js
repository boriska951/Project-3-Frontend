import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from '../components/product'

import { getProducts as listProducts} from "../redux/actions/productActions";

const Homescreen = () => {

    const dispatch = useDispatch()

    const getProducts = useSelector(state => state.getProducts)
    const {products, loading,error} = getProducts 

    useEffect(()=>{
        dispatch(listProducts())
    }, [dispatch])

      
    return(
        <div className="main">
        <div className='product-page'>
            <div className="products-list">
                {loading ? <h2>Loading</h2> : error ? <h2>{error}</h2>: (products.map((product) => 
                    <Product 
                    key={product._id} 
                    productId={product._id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    />
                    )
                )}
            </div>
            </div>
        </div>
    )
}
 
export default Homescreen