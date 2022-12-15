import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import clsx from 'clsx'

import useOnClickOutside from 'lib/hook'

import OpenMenu from 'assets/svg/openCommOptIcon.svg'
import HookIcon from 'assets/svg/hookIcon.svg'

import stl from './CommentMenu.module.scss'

const CommentMenu = ({ handleClick, cusomClass }) => {
  const [name, setName] = useState('Top comments')
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef()

  if (typeof window !== 'undefined') {
    const optMenu = document.getElementById('optMenu')
    if (isOpen) {
      optMenu.style.display = 'block'
    } else {
      optMenu.style.display = 'none'
    }
  }

  const hide = () => {
    setIsOpen(false)
  }

  useOnClickOutside(hide, ref)

  return (
    <div ref={ref} className={clsx(stl.container, cusomClass)}>
      <div
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true)
          } else {
            hide()
          }
        }}
        className={stl.heading}
      >
        {name}
        {<OpenMenu />}
      </div>
      <div id="optMenu" className={stl.optionBox}>
        <HookIcon className={stl.icon} />
        <div
          onClick={() => {
            setName('Top comments')
            hide()
            handleClick('top')
          }}
          className={stl.option}
        >
          <span className={stl.optionHead}>Top comments</span>
          <span className={stl.optionDesc}>
            Show the most engaging comment first.
          </span>
        </div>
        <div
          onClick={() => {
            setName('Most recent')
            hide()
            handleClick('most')
          }}
          className={stl.option}
        >
          <span className={stl.optionHead}>Most recent</span>
          <span className={stl.optionDesc}>Show the newest comment first.</span>
        </div>
        <div
          onClick={() => {
            setName('All comments')
            hide()
            handleClick('all')
          }}
          className={stl.option}
        >
          <span className={stl.optionHead}>All comments</span>
          <span className={stl.optionDesc}>
            Show all comments in chronological order, including potential spam.
          </span>
        </div>
      </div>
    </div>
  )
}

CommentMenu.defaultProps = {
  handleClick: (val) => console.log(val),
}

CommentMenu.propTypes = {
  handleClick: PropTypes.func,
}

export default CommentMenu
