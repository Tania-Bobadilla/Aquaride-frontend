import { useContext, useEffect } from "react"
import { Button, ButtonGroup, Card, CardGroup, Col, Row } from "react-bootstrap"
import ProductContext from "../context/Products/ProductContext"
import { Link } from "react-router-dom"

const Surf = () => {
  const { getProductssurf, products } = useContext(ProductContext)

  useEffect(() => {
    const productList = async () => {
      await getProductssurf()
    }
    productList()
  }, [])

  return (
    <main className="catalogo">
      <Row>
        <h2>Catálogo de Surf</h2>

        <Col md={3}>
          <h4>Categorías</h4>
          <ButtonGroup vertical>
            <Button variant="link" href="/hombre">Hombre</Button>
            <Button variant="link" href="/mujer">Mujer</Button>
            <Button variant="link" href="/niños">Niños</Button>
            <Button variant="link" href="/accesorios">Accesorios</Button>
            <Button variant="link" href="/surf">Surf</Button>
          </ButtonGroup>
        </Col>
        <Col md={9}>
          <CardGroup>
            {products.map((prod) => (
              <div key={prod._id}>
                <Link to={`/surf/${prod._id}`}>
                  <Card>
                    <Card.Img variant="top" src={prod.image} />
                    <Card.Body>
                      <Card.Title>{prod.name}</Card.Title>
                      <Card.Text>$ {prod.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </CardGroup>
        </Col>
      </Row>
    </main>
  )
}

export default Surf