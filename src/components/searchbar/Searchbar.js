import PropTypes from 'prop-types'
import clsx from 'clsx'

import SearchIcon from '../../assets/searchIcon.svg'

import stl from './Searchbar.module.scss'

const Searchbar = ({ icon, placeholder, customClass }) => {
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
      <label for="search" id="label">
        {icon}
      </label>
      <input
        type="search"
        id="search"
        name="search"
        placeholder={placeholder}
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
