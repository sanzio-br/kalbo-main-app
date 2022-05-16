
import { Card, Button, Container } from 'react-bootstrap'
import image from "../../images/DSC_0770.jpg"
export default function Destinations() {
  return (
    <section className='destinations'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Beach Holiday</Card.Title>
          <Button variant="primary">Book</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Camping</Card.Title>
          <Button variant="primary">Book</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Truck party</Card.Title>
          <Button variant="primary">Book</Button>
        </Card.Body>
      </Card>
    </section>
  )
}