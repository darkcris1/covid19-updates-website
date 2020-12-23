import { Row, Col, Container } from 'react-bootstrap'
import Card from '../Card'

const flexCenter = 'text-center align-items-center justify-content-center my-2'

function CardSection({ cardData }) {
  return (
    <Row className={flexCenter}>
      {cardData.map((cards, i) => (
        <Col key={i} md="4" sm="12" className={flexCenter}>
          <Card {...cards} />
        </Col>
      ))}
    </Row>
  )
}

export default CardSection
