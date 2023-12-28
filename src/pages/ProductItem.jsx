import ProductContext from "../context/Products/ProductContext"
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const { id } = useParams()

  const { getProductById, product } = useContext(ProductContext)

  const { name, stock, price, image, sku } = product;

  console.log(name, stock, price, image, sku)
  useEffect(() => {
    console.log("Fetching product...");
    console.log(id)
    const fetchProduct = async () => {
      await getProductById(id);
      console.log("Product fetched:", product);
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      <p>{name}</p>
      <p>{stock}</p>
      <p>$ {price}</p>
      <p>{sku}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default ProductItem