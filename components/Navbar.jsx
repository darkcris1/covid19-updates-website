import { Navbar, Nav } from 'react-bootstrap'
import Link from './Link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const NavBar = () => {
  const { pathname } = useRouter()
  return (
    <Navbar bg="light" expand="sm">
      <div className="navbar-brand">
        <Link href="/" class>
          <Image
            alt="COVIDTracker Logo"
            src="/coronavirus.png"
            width={20}
            height={20}
          />
          Covid Tracker
        </Link>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Item>
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            href="/countries"
            className={pathname === '/countries' ? 'active' : ''}
          >
            Countries
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
