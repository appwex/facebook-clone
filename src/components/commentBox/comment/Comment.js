import AvatarButton from 'components/avatarButton'

import ReplyIcon from 'assets/svg/replyIcon.svg'

import stl from './Comment.module.scss'

const Comment = ({
  name,
  description,
  reactComm,
  commentInfo,
  handleCommentReact,
  numOfReplies,
  customClass,
}) => {
  const text = description.split('\n')

  return (
    <div className={stl.container}>
      <div className={stl.avatar}>
        <AvatarButton />
      </div>
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
          {reactComm.map((react, i) => {
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
          {commentInfo.map((info, i) => {
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
        <div
          onClick={() => {
            console.log('Clicked...')
          }}
          className={stl.replied}
        >
          <ReplyIcon />
          {numOfReplies}
        </div>
        <div className={stl.nestComment}></div>
      </div>
    </div>
  )
}

export default Comment
