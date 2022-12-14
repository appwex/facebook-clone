import PropTypes from 'prop-types'
import clsx from 'clsx'

import NotificationIcon from 'assets/notificationIcon.svg'

import stl from './IconButton.module.scss'

const IconButton = ({ variant, icon, onClick, customClass }) => {
  return (
    <div
      onClick={() => {
        onClick()
      }}
      className={clsx(stl.container, stl[`${variant}`], customClass)}
    >
      {icon}
    </div>
  )
}

IconButton.defaultProps = {
  variant: 'primary',
  icon: <NotificationIcon />,
  onClick: () => console.log('Clicked...'),
}

IconButton.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
}

export default IconButton
