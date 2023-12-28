import { useContext, useEffect } from "react"
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap"
import ProductContext from "../context/Products/ProductContext"
import { Link } from "react-router-dom"
import CardProduct from "../components/Products/CardProduct"

const Hombre = () => {
  const { getProducts, products } = useContext(ProductContext)

  useEffect(() => {
    const productList = async () => {
      await getProducts()
    }
    productList()
  }, [])

  return (
    <main>
      <Row>
        <h2>Products</h2>

        <Col md={3}>
          <h2>Categorías</h2>
          <ul>
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Niños</li>
            <li>Accesorios</li>
            <li>Surf</li>
          </ul>
        </Col>
        <Col md={9}>
          <CardGroup>
            {products.map((product) => (
              <Link className="no-underline" to={`/hombre/${product._id}`} key={product._id}>
                <CardProduct  product={product} />
              </Link>
            ))}
          </CardGroup>
        </Col>
      </Row>
    </main>
  )
}

export default Hombre