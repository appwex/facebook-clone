import clsx from 'clsx'

import stl from './CommentBox.module.scss'

const CommentBox = ({ prevComm, typeOfComm, nextComm, customClass }) => {
  return (
    <div className={clsx(stl.commentBox, customClass)}>
      <div className={stl.row1}>
        {prevComm && prevComm}
        {typeOfComm}
      </div>
      <div className={stl.row2}>{nextComm}</div>
    </div>
  )
}

export default CommentBox
