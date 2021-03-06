import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, useState, useEffect } from 'react'
import { Container, Card, ListGroup } from 'react-bootstrap'
import SEO from '../../components/SEO'
import Error from '../_error'

const country = ({ data = {}, error }) => {
  const { country, active, todayCases, deaths, critical, recovered } = data
  const totalCases = useMemo(
    () => (active + recovered + deaths).toLocaleString('en'),
    [data],
  )

  if (error) return <Error message={error} />

  return (
    <>
      <SEO title={`Covid Updates - ${country}`} />
      <Container>
        <Link href="/countries">
          <a style={{ textDecoration: 'underline' }} className="text-primary">
            Back to Lists
          </a>
        </Link>
        <Card.Header className="text-primary display-5">{country}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="text-success">
            {recovered} - Recovered
          </ListGroup.Item>
          <ListGroup.Item>{active} - Active Cases</ListGroup.Item>
          <ListGroup.Item>{todayCases} - Today Cases</ListGroup.Item>
          <ListGroup.Item>{deaths} - Total Deaths</ListGroup.Item>
          <ListGroup.Item>{critical} - Critical</ListGroup.Item>
          <ListGroup.Item>{totalCases} - Total Cases</ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  )
}
export async function getStaticPaths() {
  const res = await fetch('https://coronavirus-19-api.herokuapp.com/countries')
  const data = await res.json()

  const paths = data.map(({ country }) => ({ params: { country } }))

  return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    'https://coronavirus-19-api.herokuapp.com/countries/' + params.country,
  )
  const data = await res.json()
  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default country
