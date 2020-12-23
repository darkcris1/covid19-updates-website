import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <footer className="text-center">
        <p>
          © 2020 Copyright | Made by{' '}
          <a className="text-primary" href="https://github.com/darkcris1">
            Cris Fandiño Jr.
          </a>
        </p>
      </footer>
    </Container>
  )
}

export default Footer
