import { Jumbotron, Row, Col, Button, Alert, Container } from 'react-bootstrap'
import Link from 'next/link'
const flexCenter = 'text-center align-items-center justify-content-center my-2'

function MainSection({ data = {} }) {
  return (
    <Jumbotron className="my-2 position-relative">
      <Row className="justify-content-between">
        <Col
          sm="12"
          md="5"
          className={flexCenter + 'text-sm-center text-md-left'}
        >
          <h2>
            Online <span className="text-primary"> covid </span> updates{' '}
          </h2>
          <hr />
          <p className="lead">Online covid updates anywhere in the countries</p>
          <Link href="/countries">
            <Button className="shadow-lg"> More Details </Button>
          </Link>
        </Col>
        <Col sm="12" md="5" className={flexCenter}>
          <img
            style={{ filter: 'blur(1.rem)' }}
            src="/coronavirus.png"
            alt="Corona Virus logo"
            width={200}
            height={200}
          />
        </Col>
      </Row>

      <h1 align="center" className="text-primary">
        World Cases
      </h1>
      <Row>
        <Col sm="12" md="4">
          <Alert variant="danger">
            Total Cases:{' '}
            <span className="text-primary">
              {data.cases.toLocaleString('en')}
            </span>
          </Alert>
        </Col>
        <Col sm="12" md="4">
          <Alert variant="success">
            Total Recovered:{' '}
            <span className="text-success">
              {data.recovered.toLocaleString('en')}{' '}
            </span>
          </Alert>
        </Col>
        <Col sm="12" md="4">
          <Alert variant="primary">
            Total Deaths:{' '}
            <span className="text-danger">
              {data.deaths.toLocaleString('en')}{' '}
            </span>
          </Alert>
        </Col>
      </Row>
    </Jumbotron>
  )
}

export default MainSection
