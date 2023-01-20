import PropTypes from 'prop-types'
import clsx from 'clsx'

import AvatarButton from 'components/avatarButton'

import ReplyIcon from 'assets/svg/replyIcon.svg'
import MoreIcon from 'assets/svg/moreIcon2.svg'

import stl from './Comment.module.scss'
import { useState } from 'react'
import EnterComment from '../enterComment'

const Comment = ({
  maxWidth,
  treejoint,
  treeline,
  avatar,
  name,
  description,
  reactComm,
  commentInfo,
  handleCommentReact,
  handleCommentInfo,
  numOfReplies,
  repliedComms,
  customClass,
}) => {
  const text = description.split('\n')

  const [showReplied, setShowReplied] = useState(false)
  const [treeLine, setTreeLine] = useState('')

  return (
    <div
      style={{ maxWidth: maxWidth }}
      className={clsx(stl.container, customClass)}
    >
      {treejoint && <div className={stl.treeJoint}></div>}
      {treeline && <div className={clsx(stl.treeLine, stl[treeLine])}></div>}
      <div className={stl.row}>
        {avatar}
        <div className={stl.content}>
          <div className={stl.comment}>
            <span className={stl.name}>{name}</span>
            {text.map((portion, i) => {
              if (portion === '') {
                return <br key={i} />
              } else {
                return (
                  <span key={i} className={stl.desc}>
                    {portion}
                  </span>
                )
              }
            })}
          </div>
          <div className={stl.reactComm}>
            {typeof reactComm !== 'undefined' &&
              reactComm.map((react, i) => {
                return (
                  <div
                    onClick={() => {
                      handleCommentReact(react)
                    }}
                    key={i}
                    className={stl.reactItem}
                  >
                    {react}
                  </div>
                )
              })}

            {typeof commentInfo !== 'undefined' &&
              commentInfo.map((info, i) => {
                return (
                  <div
                    onClick={() => {
                      handleCommentInfo(info)
                    }}
                    key={i}
                    className={stl.commInfo}
                  >
                    {info}
                  </div>
                )
              })}
          </div>
        </div>
        <div className={stl.hideOrReport}>
          <div id="commReportBtn" className={stl.reportBtn}>
            <MoreIcon />
          </div>
        </div>
      </div>
      <div className={stl.nest}>
        {typeof numOfReplies !== 'undefined' && showReplied === false && (
          <div
            onClick={() => {
              if (showReplied === false) {
                setShowReplied(true)
                setTreeLine('long')
              } else {
                setShowReplied(false)
              }
            }}
            className={stl.replied}
          >
            <div className={stl.treeJoint2}></div>
            <ReplyIcon />
            {numOfReplies}
          </div>
        )}
        {typeof repliedComms !== 'undefined' && showReplied && (
          <div className={stl.nestComments}>
            {repliedComms.map((data, i) => (
              <div key={i} className={stl.nestComm}>
                {data}
              </div>
            ))}
            <div className={stl.enterComment}>
              <div className={stl.treeJoint3}></div>
              <EnterComment
                avatarBtn={
                  <AvatarButton minWidth="30px" width="30px" height="30px" />
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const description =
  'Id esse veniam deserunt fugiat reprehenderit pariatur pariatur. Aliquip Lorem commodo elit deserunt non reprehenderit ad proident non incididunt consectetur veniam ea duis. Nulla ex duis proident laborum eiusmod dolore duis dolore proident aliquip culpa non exercitation eiusmod. 😁 '

Comment.defaultProps = {
  avatar: <AvatarButton minWidth="40px" />,
  name: 'John Doe',
  description: description,
  reactComm: ['Like', 'Reply', 'Share'],
  commentInfo: ['4h', 'Edited'],
  handleCommentReact: (react) => console.log('Clicked...', react),
  handleCommentInfo: (info) => console.log('Clicked...', info),
  handleReply: () => console.log('Clicked...'),
}

Comment.propTypes = {
  maxWidth: PropTypes.string,
  treejoint: PropTypes.bool,
  treeline: PropTypes.bool,
  avatar: PropTypes.node,
  name: PropTypes.string,
  description: PropTypes.string,
  reactComm: PropTypes.array,
  commentInfo: PropTypes.array,
  handleCommentReact: PropTypes.func,
  handleCommentInfo: PropTypes.func,
  numOfReplies: PropTypes.string,
  repliedComms: PropTypes.array,
  customClass: PropTypes.string,
}

export default Comment
