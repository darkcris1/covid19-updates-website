import { Button, Card } from 'react-bootstrap'

const cardStyle = {
  borderRadius: '15px',
  border: '1px solid var(--primary)',
}
export default ({ text, title, btnText = 'Learn More', img, alt }) => {
  return (
    <Card style={cardStyle} className="shadow">
      <Card.Img
        variant="top"
        style={{ maxHeight: '250px', borderRadius: '15px' }}
        src={img}
        alt={alt || 'Card Image'}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}
