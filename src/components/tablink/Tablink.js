import PropTypes from 'prop-types'
import Link from 'next/link'
import clsx from 'clsx'

import HomeIcon from 'assets/svg/homeIcon.svg'

import stl from './Tablink.module.scss'

const Tablink = ({
  icon,
  label,
  type,
  variant,
  bgColor,
  link,
  onClick,
  customClass,
}) => {
  return (
    <div
      onClick={() => {
        onClick()
      }}
      className={clsx(stl[type], customClass)}
    >
      <Link href={link}>
        <div className={clsx(stl.content, stl[variant])}>
          {icon}
          {label}
        </div>
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
  onClick: () => console.log('Clicked...'),
}

Tablink.propTypes = {
  variant: PropTypes.string,
  bgColor: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
}

export default Tablink
