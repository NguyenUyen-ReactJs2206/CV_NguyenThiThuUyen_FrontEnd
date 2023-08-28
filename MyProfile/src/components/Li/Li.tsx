import { Link } from 'react-scroll'

type Props = {
  scrollTo: string
  title: string
  closeMenu?: () => void
  className: string
}
export default function Li({ scrollTo, title, closeMenu, className }: Props) {
  return (
    <>
      <li className={className}>
        <Link
          className='py-1 cursor-pointer'
          to={scrollTo}
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
          onClick={closeMenu}
        >
          {title}
        </Link>
      </li>
    </>
  )
}
