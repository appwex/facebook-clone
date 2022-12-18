import Stories from 'components/stories'
import Comment from 'components/commentBox/comment'

const commentMenu = {
  arg: 'Comment',
  name: 'John Doe',
  description:
    'Id esse veniam deserunt fugiat reprehenderit pariatur pariatur. Aliquip Lorem commodo elit deserunt non reprehenderit ad proident non incididunt consectetur veniam ea duis. Nulla ex duis proident laborum eiusmod dolore duis dolore proident aliquip culpa non exercitation eiusmod. 😁 ',
  reactComm: ['Like', 'Reply', 'Share'],
  commentInfo: ['4h', 'Edited'],
  handleCommentReact: () => console.log('Clicked...'),
  numOfReplies: '11 Replies',
}

const CommentMenuStory = () => (
  <Stories argList={[commentMenu]} template={Comment} />
)

export default CommentMenuStory
