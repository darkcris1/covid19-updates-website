import MainSection from '../components/sections/MainSection'
import CardSection from '../components/sections/CardSection'
import { Container } from 'react-bootstrap'
const cardData = [
  {
    title: 'Track your activity',
    text: 'Keep your mind and body healthy',
    img: '/undraw_activity_tracker.png',
  },
  {
    title: 'Regular Checkup',
    text: 'If there any signs or symptoms its better to check it up sooner',
    img: '/undraw_medical_research_qg4d.png',
  },
  {
    title: 'Wash your hands',
    text: 'Washing your hands might help to prevent covid 19 from spreading',
    img: '/undraw_wash_hands_nwl2.png',
  },
]

export default function Home({ data = {} }) {
  return (
    <>
      <MainSection data={data} />
      <Container>
        <CardSection cardData={cardData} />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://coronavirus-19-api.herokuapp.com/all')
  const data = await res.json()

  return {
    revalidate: 1,
    props: {
      data,
    },
  }
}
