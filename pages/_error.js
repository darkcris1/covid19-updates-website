import { Alert, Button, Container } from 'react-bootstrap'
import { useRouter } from 'next/router'
import SEO from '../components/SEO'
function Error({ message = 'Page Not Found' }) {
  const { back } = useRouter()
  return (
    <>
      <SEO title={message} description={message} />
      <Container>
        <Alert variant="danger" className="text-center">
          <p>{message}</p>
          <Button onClick={back}>Back </Button>
        </Alert>
      </Container>
    </>
  )
}

export default Error
