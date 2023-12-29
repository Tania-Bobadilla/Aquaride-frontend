import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap"
import ProductContext from "../context/Products/ProductContext"
import axiosClient from '../config/axiosClient'
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
    <main>
      <Row>
        <h2>Catálogo de Surf</h2>

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
            ))}
          </CardGroup>
        </Col>
      </Row>
    </main>
  )
}

export default Surf