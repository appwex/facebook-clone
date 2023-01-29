import PropTypes from 'prop-types'
import clsx from 'clsx'

import NotificationIcon from 'assets/svg/bell.svg'

import stl from './IconButton.module.scss'

const IconButton = ({ variant, icon, onClick, customClass }) => (
  <button
    onClick={onClick}
    className={clsx(stl.button, stl[variant], customClass)}
  >
    {icon}
  </button>
)

IconButton.defaultProps = {
  variant: 'primary',
  icon: <NotificationIcon />,
  onClick: () => console.log('Clicked...'),
}

IconButton.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
}

export default IconButton
