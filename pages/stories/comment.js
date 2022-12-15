import Stories from 'components/stories'
import CommentMenu from 'components/commentBox/commentMenu'

const commentMenu = {
  arg: 'Comment Menu',
}

const CommentMenuStory = () => (
  <Stories argList={[commentMenu]} template={CommentMenu} />
)

export default CommentMenuStory
