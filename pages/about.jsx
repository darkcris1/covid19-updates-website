import SEO from '../components/SEO'
import { Container } from 'react-bootstrap'
function About() {
  return (
    <>
      <SEO title="Covid Tracker | About" />
      <Container>
        <h1>
          Author:{' '}
          <a className="text-primary" href="https://github.com/darkcris1">
            Developer
          </a>
        </h1>
      </Container>
    </>
  )
}

export default About
