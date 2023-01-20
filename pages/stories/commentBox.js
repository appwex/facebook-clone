import Stories from 'components/stories'
import CommentBox from 'components/commentBox'
import LinkButton from 'components/linkButton'
import CommentMenu from 'components/commentBox/commentMenu'
import Comment from 'components/commentBox/comment'

const commentBox = {
  arg: 'Comment Box',
  prevComm: <LinkButton content="View previous comments" />,
  typeOfComm: <CommentMenu />,
  comments: <Comment />,
  nextComm: <LinkButton content="View more comments" />,
}

const CommentBoxStory = () => (
  <Stories argList={[commentBox]} template={CommentBox} />
)

export default CommentBoxStory
