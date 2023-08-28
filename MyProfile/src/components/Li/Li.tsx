import { Link } from 'react-scroll'

type Props = {
  scrollTo: string
  title: string
  closeMenu: () => void
}
export default function Li({ scrollTo, title, closeMenu }: Props) {
  return (
    <>
      <li className='text-white'>
        <Link
          className='py-1 cursor-pointer'
          activeClass='active'
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
