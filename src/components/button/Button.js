import PropTypes from 'prop-types'
import clsx from 'clsx'

<<<<<<< HEAD
<<<<<<< HEAD
import AddIcon from '../../assets/plus.svg'
=======
import AddIcon from '../../assets/addIcon.svg'
>>>>>>> 3676363 (Add Button Component)
=======
import AddIcon from '../../assets/addIcon.svg'
>>>>>>> ef7cf4b (Add Button Component)

import stl from './Button.module.scss'

const Button = ({ variant, icon, label, onClick, customClass }) => {
  return (
    <div
      onClick={() => {
        onClick()
      }}
      className={clsx(stl.container, stl[`${variant}`], customClass)}
    >
      <div className={stl.icon}>{icon}</div>
      <div className={stl.label}>{label}</div>
    </div>
  )
}

Button.defaultProps = {
  variant: 'primary',
  icon: <AddIcon />,
  label: 'Button',
  onClick: () => console.log('Clicked...'),
}

Button.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
