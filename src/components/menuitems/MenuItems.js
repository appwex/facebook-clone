import PropTypes from 'prop-types'
import clsx from 'clsx'

import GroupsIcon from 'assets/svg/groupsIcon.svg'

import stl from './MenuItems.module.scss'

const MenuItems = ({ icon, label, width, height, onClick, customClass }) => {
  return (
    <div
      onClick={() => {
        onClick()
      }}
      style={{ width: width, height: height }}
      className={clsx(stl.container, customClass)}
    >
      {icon}
      {label}
    </div>
  )
}

MenuItems.defaultProps = {
  icon: <GroupsIcon />,
  label: 'Groups',
  onClick: () => console.log('Clicked...'),
}

MenuItems.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
}

export default MenuItems
