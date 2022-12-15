import { use, useState } from 'react'

import OpenMenu from 'assets/svg/openCommOptIcon.svg'
import HookIcon from 'assets/svg/hookIcon.svg'

import stl from './CommentMenu.module.scss'

const CommentMenu = () => {
  const [name, setName] = useState('Top comments')
  const [isOpen, setIsOpen] = useState(false)

  if (typeof window !== 'undefined') {
    const optMenu = document.getElementById('optMenu')
    if (isOpen) {
      optMenu.style.display = 'block'
    } else {
      optMenu.style.display = 'none'
    }
  }

  return (
    <div className={stl.container}>
      <div
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true)
          } else {
            setIsOpen(false)
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
            setIsOpen(false)
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
            setIsOpen(false)
          }}
          className={stl.option}
        >
          <span className={stl.optionHead}>Most recent</span>
          <span className={stl.optionDesc}>Show the newest comment first.</span>
        </div>
        <div
          onClick={() => {
            setName('All comments')
            setIsOpen(false)
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

export default CommentMenu
