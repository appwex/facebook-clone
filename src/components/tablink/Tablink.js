import PropTypes from 'prop-types'
import Link from 'next/link'
import clsx from 'clsx'

import HomeIcon from '../../assets/homeIcon.svg'

import stl from './Tablink.module.scss'

const Tablink = ({ variant, bgColor, link, icon, customClass }) => {
  return (
    <Link href={`${link}`}>
      <div className={clsx(stl.container, customClass)}>
        <div className={clsx(stl.icon, stl[variant])}>{icon}</div>
        <div style={{ background: bgColor }} className={stl.borderBot}></div>
      </div>
    </Link>
  )
}

Tablink.defaultProps = {
  variant: 'primary',
  bgColor: '#1b74e4',
  link: '',
  icon: <HomeIcon />,
}

Tablink.propTypes = {
  variant: PropTypes.string,
  bgColor: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.node,
}

export default Tablink
