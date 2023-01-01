import PropTypes from 'prop-types'
import clsx from 'clsx'

import InsertAvatarIcon from 'assets/svg/insertAvatarIcon.svg'
import InsertEmojiIcon from 'assets/svg/insertEmojiIcon.svg'
import InsertPhotoIcon from 'assets/svg/insertPhotoVideoIcon.svg'
import InsertStickerIcon from 'assets/svg/insertStickerIcon.svg'
import InsertGifIcon from 'assets/svg/insertGifIcon.svg'

import stl from './EnterComment.module.scss'
import { useState } from 'react'

const EnterComment = ({
  avatarBtn,
  placeholder,
  handleEnterKey,
  addAvatarHandler,
  addEmojiHandler,
  addGifHandler,
  addPhotoHandler,
  addStickerHandler,
  label,
  customClass,
}) => {
  const [commentVal, setCommentVal] = useState('')

  const handleKeyDown = (e) => {
    const ele = e.target
    ele.style.height = '25px'
    if (ele.scrollHeight > '20') {
      ele.style.height = ele.scrollHeight + 'px'
    }

    e.key === 'Enter' &&
      !e.shiftKey &&
      (e.preventDefault(), handleEnterKey(commentVal))

    if (commentVal === '') {
      ele.style.height = '25px'
    }
  }

  if (typeof window !== 'undefined') {
    const ele = document.getElementById('textArea')
    console.log(ele.offsetWidth)
  }

  return (
    <div className={clsx(stl.enterComment, customClass)}>
      <div className={stl.container}>
        {avatarBtn}
        <div className={stl.input}>
          <textarea
            cols="72"
            id="textArea"
            name="enterComment"
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            onChange={(e) => setCommentVal(e.target.value)}
          ></textarea>
          <div className={stl.insert}>
            <div onClick={addAvatarHandler} className={stl.insertBtn}>
              <InsertAvatarIcon />
            </div>
            <div onClick={addEmojiHandler} className={stl.insertBtn}>
              <InsertEmojiIcon />
            </div>
            <div onClick={addPhotoHandler} className={stl.insertBtn}>
              <InsertPhotoIcon />
            </div>
            <div onClick={addGifHandler} className={stl.insertBtn}>
              <InsertGifIcon />
            </div>
            <div onClick={addStickerHandler} className={stl.insertBtn}>
              <InsertStickerIcon />
            </div>
          </div>
        </div>
      </div>
      <label>{label}</label>
    </div>
  )
}

EnterComment.defaultProps = {
  placeholder: 'Write a public comment...',
  addAvatarHandler: () => console.log('Clicked...', 'addAvatar'),
  addEmojiHandler: () => console.log('Clicked...', 'addEmoji'),
  addGifHandler: () => console.log('Clicked...', 'addGif'),
  addPhotoHandler: () => console.log('Clicked...', 'addPhoto'),
  addStickerHandler: () => console.log('Clicked...', 'addSticker'),
  label: 'Press Enter to post.',
}

EnterComment.propTypes = {
  placeholder: PropTypes.string,
  handleEnterKey: PropTypes.func,
  addAvatarHandler: PropTypes.func,
  addEmojiHandler: PropTypes.func,
  addGifHandler: PropTypes.func,
  addPhotoHandler: PropTypes.func,
  addStickerHandler: PropTypes.func,
  label: PropTypes.string,
  customClass: PropTypes.string,
}

export default EnterComment
