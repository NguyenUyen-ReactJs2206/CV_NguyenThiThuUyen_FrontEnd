import { Link } from 'react-scroll'

type Props = {
  scrollTo: string
  title: string
}
export default function Li({ scrollTo, title }: Props) {
  return (
    <>
      <li className='text-white'>
        <Link
          className='px-6 py-1 cursor-pointer'
          activeClass='active'
          to={scrollTo}
          spy={true}
          smooth={true}
          duration={500}
        >
          {title}
        </Link>
      </li>
    </>
  )
}
