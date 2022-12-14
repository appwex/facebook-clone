import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Searchbar.module.scss'

const Searchbar = ({ icon, placeholder, width, customClass }) => {
  const [value, setValue] = useState('')

  const hideLabel = () => {
    if (icon != 'null') {
      const label = document.getElementById('label')
      label.style.width = '0'
    }
  }

  const showLabel = () => {
    if (icon != 'null') {
      const label = document.getElementById('label')
      label.style.width = '28px'
    }
  }

  return (
    <div style={{ width: width }} className={clsx(stl.container, customClass)}>
      {icon === 'null' ? <p></p> : <label id="label">{icon}</label>}
      <input
        type="search"
        id="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={hideLabel}
        onBlur={showLabel}
      />
    </div>
  )
}

Searchbar.defaultProps = {
  placeholder: 'Search Facebook',
}

Searchbar.propTypes = {
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  width: PropTypes.string,
}

export default Searchbar
