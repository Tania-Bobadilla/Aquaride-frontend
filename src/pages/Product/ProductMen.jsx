import ProductContext from "../../context/Products/ProductContext"
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import CartContext from "../../context/Cart/CartContext";
import { Button } from "react-bootstrap";

const ProductMen = () => {
  const { id } = useParams()

  const { getProductById, product } = useContext(ProductContext)
  const { addItemToCart, cartCount } = useContext(CartContext)

  const { name, stock, price, image, sku } = product;

  const handleAdd = () => { if(cartCount < stock) addItemToCart(product)}

  useEffect(() => {
    // console.log("Fetching product...");
    // console.log(id)
    const fetchProduct = async () => {
      await getProductById(id);
      // console.log("Product fetched:", product);
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

export default ProductMen