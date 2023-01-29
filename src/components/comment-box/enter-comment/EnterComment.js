import PropTypes from 'prop-types'
import clsx from 'clsx'

import AvatarButton from 'components/avatar-button'

import InsertAvatarIcon from 'assets/svg/insert-avatar.svg'
import InsertEmojiIcon from 'assets/svg/insert-emoji.svg'
import InsertPhotoIcon from 'assets/svg/insert-attachment.svg'
import InsertStickerIcon from 'assets/svg/insert-sticker.svg'
import InsertGifIcon from 'assets/svg/insert-gif.svg'

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
      ele.style.height = 10 + ele.scrollHeight + 'px'
    }

    e.key === 'Enter' &&
      !e.shiftKey &&
      (e.preventDefault(), handleEnterKey(commentVal))

    if (commentVal === '') {
      ele.style.height = '25px'
    }
  }

  return (
    <div className={clsx(stl.enterComment, customClass)}>
      <div className={stl.container}>
        {avatarBtn}
        <div className={stl.input}>
          <textarea
            id="textArea"
            name="enterComment"
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            onChange={(e) => setCommentVal(e.target.value)}
          ></textarea>
          <div id="insert" className={stl.insert}>
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
  avatarBtn: <AvatarButton width="36px" height="35px" />,
  placeholder: 'Write a public comment...',
  addAvatarHandler: () => console.log('Clicked...', 'addAvatar'),
  addEmojiHandler: () => console.log('Clicked...', 'addEmoji'),
  addGifHandler: () => console.log('Clicked...', 'addGif'),
  addPhotoHandler: () => console.log('Clicked...', 'addPhoto'),
  addStickerHandler: () => console.log('Clicked...', 'addSticker'),
  label: 'Press Enter to post.',
  handleEnterKey: (commentVal) => console.log(commentVal),
}

EnterComment.propTypes = {
  avatarBtn: PropTypes.node,
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
