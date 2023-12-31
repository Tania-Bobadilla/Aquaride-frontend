import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductContext from '../../context/Products/ProductContext';
import { Button } from 'react-bootstrap';
import CartContext from '../../context/Cart/CartContext';

const ProductKids = () => {
    const { id } = useParams()

    const { getKidById, product } = useContext(ProductContext)
    const { addItemToCart, cartCount } = useContext(CartContext)

    const { name, stock, price, image, sku } = product;

    const handleAdd = () => { if(cartCount < stock) addItemToCart(product)}

    useEffect(() => {
        console.log("Fetching product...");
        console.log(id)
        const fetchProduct = async () => {
            await getKidById(id);
            console.log("Product fetched:", product);
        };
        fetchProduct();
    }, [id]);

    return (
        <div>
            <p>{name}</p>
            <p>{stock}</p>
            <Button onClick={handleAdd} >Add</Button>
            <p>$ {price}</p>
            <p>{sku}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default ProductKids