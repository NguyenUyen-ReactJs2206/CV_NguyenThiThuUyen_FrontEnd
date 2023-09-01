import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

type Props = {
  scrollTo: string
  title: string
  closeMenu?: () => void
  className: string
}
export default function Li({ scrollTo, title, closeMenu, className }: Props) {
  const { t } = useTranslation('navbar')
  return (
    <>
      <li className={className}>
        <Link
          className='py-1 cursor-pointer'
          to={scrollTo}
          spy={true}
          smooth={true}
          duration={1000}
          offset={-20}
          onClick={closeMenu}
        >
          {t(`${title}`)}
        </Link>
      </li>
    </>
  )
}
