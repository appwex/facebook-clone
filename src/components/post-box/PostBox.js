import PropTypes from 'prop-types'
import Link from 'next/link'
import clsx from 'clsx'

import AvatarButton from 'components/avatar-button'

import PublicIcon from 'assets/svg/public.svg'
import LoveIcon from 'assets/svg/love.svg'
import LikeIcon from 'assets/svg/like-dull.svg'

import stl from './PostBox.module.scss'
import { useState } from 'react'

const PostBox = ({
  imgSrc,
  title,
  titleLink,
  buttons,
  msgContent,
  media,
  detailName,
  numOfReact,
  numOfComments,
  numOfShares,
  handleImage,
  handleReact,
  handleComment,
  handleShare,
  handleReacted,
  interactOpt,
  comments,
  customClass,
}) => {
  const [showComments, setShowComments] = useState(false)

  return (
    <div className={clsx(stl.container, customClass)}>
      <div className={stl.header}>
        <AvatarButton width="100%" imgSrc={imgSrc} />
        <div className={stl.headerContent}>
          <Link href={`${titleLink}`}>
            <h4>{title}</h4>
          </Link>
          <div className={stl.detail}>
            {detailName.map((name, i) => {
              return (
                <span key={i} className={stl.detailName}>
                  <span>{name}</span>
                  <span className={stl.dot}></span>
                </span>
              )
            })}
            <span onClick={() => {}} className={stl.icon}>
              <PublicIcon />
            </span>
          </div>
        </div>
        <div className={stl.right}>
          {buttons.map((btn, i) => (
            <span key={i}>{btn}</span>
          ))}
        </div>
      </div>
      <div id="message" className={stl.message}>
        {msgContent.map((msg, i) => {
          if (msg === '') {
            return <br key={i} />
          } else {
            return (
              <span key={i} className={stl.msgContent}>
                {msg}
              </span>
            )
          }
        })}
      </div>
      <div
        onClick={() => {
          handleImage()
        }}
        className={stl.media}
      >
        {media}
      </div>
      <div className={stl.interact}>
        <div className={stl.interactDetail}>
          <div className={stl.left}>
            <span
              onClick={() => {
                handleReacted()
              }}
              className={stl.reactedIcon}
            >
              <LikeIcon />
              <LoveIcon />
            </span>
            <span
              onClick={() => {
                handleReact()
              }}
              className={stl.numOfReact}
            >
              {numOfReact}
            </span>
          </div>
          <div className={stl.right}>
            <span
              onClick={() => {
                if (showComments === false) {
                  setShowComments(true)
                } else {
                  setShowComments(false)
                }
                handleComment()
              }}
            >
              {numOfComments}
            </span>
            <span
              onClick={() => {
                handleShare()
              }}
            >
              {numOfShares}
            </span>
          </div>
        </div>
        <div className={stl.divider}></div>
        <div className={stl.interactOpt}>{interactOpt.map((opt) => opt)}</div>
      </div>
      {typeof numOfComments !== 'undefined' && showComments && (
        <div className={stl.comments}>
          <div className={stl.divider}></div>
          {comments}
        </div>
      )}
    </div>
  )
}

PostBox.defaultProps = {
  titleLink: '',
  handleComment: () => console.log('Clicked...'),
  handleShare: () => console.log('Clicked...'),
  handleReacted: () => console.log('Clicked...'),
}

PostBox.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  titleLink: PropTypes.string,
  buttons: PropTypes.array,
  msgContent: PropTypes.array,
  media: PropTypes.node,
  detailName: PropTypes.array,
  numOfReact: PropTypes.string,
  numOfComments: PropTypes.string,
  numOfShares: PropTypes.string,
  handleImage: PropTypes.func,
  handleReact: PropTypes.func,
  handleComment: PropTypes.func,
  handleShare: PropTypes.func,
  handleReacted: PropTypes.func,
  interactOpt: PropTypes.array,
  customClass: PropTypes.string,
}

export default PostBox
