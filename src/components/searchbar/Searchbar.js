<<<<<<< HEAD
import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import SearchIcon from 'assets/search-icon.svg'
=======
import PropTypes from 'prop-types'
import clsx from 'clsx'

import SearchIcon from '../../assets/searchIcon.svg'
>>>>>>> f13aa6f (Add Searchbar Component)

import stl from './Searchbar.module.scss'

const Searchbar = ({ icon, placeholder, customClass }) => {
<<<<<<< HEAD
  const [value, setValue] = useState('')

=======
>>>>>>> f13aa6f (Add Searchbar Component)
  const hideLabel = () => {
    const label = document.getElementById('label')
    label.style.width = '0'
  }

  const showLabel = () => {
    const label = document.getElementById('label')
    label.style.width = '28px'
  }

  return (
    <div className={clsx(stl.container, customClass)}>
      <label id="label">{icon}</label>
      <input
        type="search"
        id="search"
        placeholder={placeholder}
<<<<<<< HEAD
        value={value}
        onChange={(e) => setValue(e.target.value)}
=======
>>>>>>> f13aa6f (Add Searchbar Component)
        onFocus={hideLabel}
        onBlur={showLabel}
      />
    </div>
  )
}

Searchbar.defaultProps = {
  icon: <SearchIcon />,
  placeholder: 'Search Facebook',
}

Searchbar.propTypes = {
  icon: PropTypes.node,
  placeholder: PropTypes.string,
}

export default Searchbar
