import clsx from 'clsx'

import ReplyIcon from 'assets/svg/replyIcon.svg'
import MoreIcon from 'assets/svg/moreIcon2.svg'

import stl from './Comment.module.scss'

const Comment = ({
  maxWidth,
  avatar,
  name,
  description,
  reactComm,
  commentInfo,
  handleCommentReact,
  numOfReplies,
  handleReply,
  repliedComms,
  treeLineVar,
  treeJointVar,
  treeJointVar2,
  myAvatar,
  commentInput,
  customClass,
}) => {
  const text = description.split('\n')

  return (
    <div style={{ maxWidth: maxWidth }} className={stl.container}>
      <div className={stl.row}>
        {typeof numOfReplies !== 'undefined' && (
          <div className={clsx(stl.treeLine, stl[treeLineVar])}></div>
        )}
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
                      handleCommentReact()
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
                      handleCommentReact()
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
        {typeof numOfReplies !== 'undefined' && (
          <div onClick={handleReply} className={stl.replied}>
            <ReplyIcon />
            {numOfReplies}
            <div className={clsx(stl.treeJoint, stl[treeJointVar])}></div>
          </div>
        )}
        {typeof repliedComms !== 'undefined' && (
          <div className={stl.nestComents}>
            {repliedComms.map((comm, i) => (
              <div key={i} className={stl.nestComm}>
                <div className={clsx(stl.treeJoint2, stl[treeJointVar2])}></div>
                {comm}
              </div>
            ))}
            <div className={stl.treeJoint3}></div>
            <div className={stl.enterComm}>
              <div className={stl.myAvatart}>{myAvatar}</div>{' '}
              <div className={stl.input}>{commentInput}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Comment.defaultProps = {}

export default Comment
