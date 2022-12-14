import PropTypes from 'prop-types'
import clsx from 'clsx'

import GroupsIcon from 'assets/groupsIcon.svg'

import stl from './MenuItems.module.scss'

const MenuItems = ({ icon, label, customClass }) => {
  return (
    <div className={clsx(stl.container, customClass)}>
      {icon}
      {label}
    </div>
  )
}

MenuItems.defaultProps = {
  icon: <GroupsIcon />,
  label: 'Groups',
}

MenuItems.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
}

export default MenuItems
