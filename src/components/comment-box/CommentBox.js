import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './CommentBox.module.scss'
import EnterComment from './enter-comment'
import { useEffect, useState } from 'react'

const CommentBox = ({
  typeOfComments,
  comments,
  prevComment,
  prevCommentHandler,
  nextComment,
  nextCommentHandler,
  customClass,
}) => {
  const getComments = (numOfComments = 0) => {
    console.log(comments)
    let Comm = []
    for (let i = 0; i < 3 + numOfComments; i++) {
      const comment = comments[i]
      Comm.push(comment)
    }
    return Comm
  }

  return (
    <div className={clsx(stl.commentBox, customClass)}>
      <div className={stl.row1}>{typeOfComments}</div>
      {typeof prevComment !== 'undefined' && (
        <div onClick={prevCommentHandler} className={stl.prevComment}>
          {prevComment}
        </div>
      )}
      {typeof nextComment !== 'undefined' && <EnterComment />}
      <div className={stl.comments}>
        {getComments().map((comment, i) => (
          <div key={i}>{comment}</div>
        ))}
      </div>
      {typeof prevComment !== 'undefined' && <EnterComment />}
      {typeof nextComment !== 'undefined' && (
        <div
          onClick={() => {
            getComments(5)
            nextCommentHandler
          }}
          className={stl.row2}
        >
          {nextComment}
        </div>
      )}
    </div>
  )
}

CommentBox.defaultProps = {
  prevCommentHandler: () => console.log('Clicked...'),
  nextCommentHandler: () => console.log('Clicked...'),
}

CommentBox.propTypes = {
  typeOfComments: PropTypes.node,
  comments: PropTypes.array,
  prevComment: PropTypes.node,
  prevCommentHandler: PropTypes.func,
  nextComment: PropTypes.node,
  nextCommentHandler: PropTypes.func,
  customClass: PropTypes.string,
}

export default CommentBox
