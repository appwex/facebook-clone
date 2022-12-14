import Link from 'next/link'
import clsx from 'clsx'

import AvatarButton from 'components/avatarButton'
import IconButton from 'components/iconbutton'
import Tablink from 'components/tablink'

import PublicIcon from 'assets/svg/publicIcon.svg'
import MoreIcon from 'assets/svg/moreIcon.svg'
import CloseIcon from 'assets/svg/crossIcon.svg'
import LoveIcon from 'assets/svg/facebookLoveIcon.svg'
import LikeIcon from 'assets/svg/facebookLikeIcon.svg'
import LikeIcon2 from 'assets/svg/likeIcon.svg'
import CommentIcon from 'assets/svg/commentIcon.svg'
import ShareIcon from 'assets/svg/shareIcon.svg'

import stl from './PostBox.module.scss'

const PostBox = ({
  imgSrc,
  title,
  titleLink,
  msgContent,
  media,
  detailName,
  numOfReact,
  numOfComments,
  numOfShares,
  handleImage,
  handleLike,
  handleComment,
  handleShare,
  handleReacted,
  customClass,
}) => {
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
          <IconButton
            variant="secondary"
            customClass={stl.button}
            icon={<MoreIcon />}
          />
          <IconButton
            variant="secondary"
            customClass={stl.button}
            icon={<CloseIcon />}
          />
        </div>
      </div>
      <div id="message" className={stl.message}>
        {msgContent.map((msg, i) => {
          return (
            <span key={i} className={stl.msgContent}>
              {msg}
            </span>
          )
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
                handleLike()
              }}
              className={stl.numOfReact}
            >
              {numOfReact}
            </span>
          </div>
          <div className={stl.right}>
            <span
              onClick={() => {
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
        <div className={stl.interactOpt}>
          <Tablink
            type="labeledSecondary"
            bgColor="none"
            icon={<LikeIcon2 />}
            label="Like"
            customClass={stl.tablink}
          />
          <Tablink
            type="labeledSecondary"
            bgColor="none"
            icon={<CommentIcon />}
            label="Comment"
            customClass={stl.tablink}
          />
          <Tablink
            type="labeledSecondary"
            bgColor="none"
            icon={<ShareIcon />}
            label="Share"
            customClass={stl.tablink}
          />
        </div>
      </div>
    </div>
  )
}

export default PostBox
