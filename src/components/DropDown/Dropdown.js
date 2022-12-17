import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import clsx from 'clsx'

import HookIcon from 'assets/svg/hookIcon.svg'

import useClickOutside from 'lib/hook'

import stl from './Dropdown.module.scss'

const Dropdown = ({
  label,
  icon,
  listDropdown,
  listClass,
  liClass,
  dropDownPos,
  top,
  right,
  bottom,
  left,
  liOnClick,
  hasHook,
  hookTop,
  hookRight,
  hookBottom,
  hookLeft,
  customClass,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef()

  if (typeof window !== 'undefined') {
    const dropDown = document.getElementById('dropDown')
    if (hasHook === true) {
      dropDown.classList.add(stl.dropDownHook)
    }

    if (isOpen) {
      dropDown.classList.add(stl.showDropdown)
    } else {
      dropDown.classList.remove(stl.showDropdown)
    }
  }

  const hideDropdown = () => {
    setIsOpen(false)
  }

  useClickOutside(hideDropdown, ref)

  return (
    <div ref={ref} className={clsx(stl.container, customClass)}>
      <div
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className={stl.label}
      >
        {label || icon}
      </div>
      <div
        id="dropDown"
        style={{ top: top, right: right, bottom: bottom, left: left }}
        className={clsx(stl.dropDown, stl[dropDownPos], listClass)}
      >
        {listDropdown.map((list, i) => (
          <div
            onClick={(e) => {
              liOnClick(e)
              hideDropdown()
            }}
            key={i}
            className={liClass}
          >
            {list}
          </div>
        ))}
        <HookIcon
          style={{
            top: hookTop,
            right: hookRight,
            bottom: hookBottom,
            left: hookLeft,
          }}
          className={stl.hook}
        />
      </div>
    </div>
  )
}

Dropdown.defaultProps = {
  label: 'Dropdown',
  liOnClick: () => console.log('Clicked...'),
}

Dropdown.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  listDropdown: PropTypes.array,
  listClass: PropTypes.string,
  liClass: PropTypes.string,
  dropDownPos: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  liOnClick: PropTypes.func,
  hasHook: PropTypes.bool,
  hookTop: PropTypes.string,
  hookRight: PropTypes.string,
  hookBottom: PropTypes.string,
  hookLeft: PropTypes.string,
  customClass: PropTypes.string,
}

export default Dropdown
