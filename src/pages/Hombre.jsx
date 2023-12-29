import { useContext, useEffect } from "react"
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap"
import ProductContext from "../context/Products/ProductContext"
import { Link } from "react-router-dom"
import CardProduct from "../components/Products/CardProduct"

const Hombre = () => {
  const { getProductshombre, products } = useContext(ProductContext)

  useEffect(() => {
    const productList = async () => {
      await getProductshombre()
    }
    productList()
  }, [])

  return (
    <main>
      <Row>
        <h2>Catálogo de Hombre</h2>

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
<<<<<<< HEAD
            {products.map((prod) => (
              <div key={prod._id}>
                <Link to={`/hombre/${prod._id}`}>
                  <Card style={{ width: '350px' }} >
                    <Card.Img variant="top" src={prod.image} />
                    <Card.Body>
                      <Card.Title>{prod.name}</Card.Title>
                      <Card.Text>{prod.price}</Card.Text>
                      <Button variant="primary">Agregar al Carro</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
=======
            {products.map((product) => (
              <Link className="no-underline" to={`/hombre/${product._id}`} key={product._id}>
                <CardProduct  product={product} />
              </Link>
>>>>>>> 12cb5bb6b3b6cb469d46c6af386f5a282e255177
            ))}
          </CardGroup>
        </Col>
      </Row>
    </main>
  )
}

export default Hombre