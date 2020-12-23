import Link from 'next/link'

export default ({ children, href, as, className, ...props }) => {
  return (
    <Link href={href} as={as}>
      <a href={href} className={'nav-link ' + className} p {...props}>
        {children}
      </a>
    </Link>
  )
}
