import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Container, Card, ListGroup, Row, Col, Form } from 'react-bootstrap'
const flexCenter = 'align-items-center justify-content-center my-2'

const Countries = ({ data = {} }) => {
  const [countries, setCountries] = useState(data)
  const [loading, setLoading] = useState(true)
  function handleSearch({ target }) {
    const value = target.value
    const searchCountries = data.filter(({ country }) => {
      return RegExp(value, 'i').test(country)
    })
    setCountries(searchCountries)
  }
  return (
    <Container>
      <Form className="m-2 w-50">
        <Form.Group>
          <Form.Label>Search for countries</Form.Label>
          <Form.Control
            onChange={handleSearch}
            type="search"
            list="countryList"
            placeholder="ex. Philippines"
          />
        </Form.Group>
        <datalist id="countryList">
          {countries.map(({ country }) => {
            return <option key={country} value={country} />
          })}
        </datalist>
      </Form>
      <Row className={flexCenter}>
        {countries.map((data, i) => {
          const {
            country,
            critical,
            recovered,
            deaths,
            todayCases,
            active,
          } = data
          return (
            <Col key={country} sm="6" md="4">
              <Card style={{ margin: '1rem' }}>
                <Card.Header className="text-primary">{country}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item className="text-success">
                    {recovered} - Recovered
                  </ListGroup.Item>
                  <ListGroup.Item>{active} - Active Cases</ListGroup.Item>
                  <ListGroup.Item>{todayCases} - Today Cases</ListGroup.Item>
                  <ListGroup.Item>{deaths} - Total Deaths</ListGroup.Item>
                  <ListGroup.Item>{critical} - Critical</ListGroup.Item>
                  <ListGroup.Item className="text-primary">
                    <Link href={'/countries/' + country}>
                      <a style={{ textDecoration: 'underline' }}>
                        View More Details
                      </a>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Countries
