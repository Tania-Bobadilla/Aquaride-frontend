import { Button, Card } from "react-bootstrap";

const CardProducts = ({ product }) => {

  const { name, price, _id, image } = product;

  return (
    <>
      <Card style={{ width: '350px' }} >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardProducts