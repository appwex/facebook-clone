import Stories from 'components/stories'
import Comment from 'components/commentBox/comment'
import AvatarButton from 'components/avatarButton'

const description =
  'Id esse veniam deserunt fugiat reprehenderit pariatur pariatur. Aliquip Lorem commodo elit deserunt non reprehenderit ad proident non incididunt consectetur veniam ea duis. Nulla ex duis proident laborum eiusmod dolore duis dolore proident aliquip culpa non exercitation eiusmod. 😁 '

const handleReply = () => {
  console.log('Clicked...')
}

const commentMenu = {
  arg: 'Comment',
  avatar: <AvatarButton minWidth="40px" />,
  name: 'John Doe',
  description: description,
  reactComm: ['Like', 'Reply', 'Share'],
  commentInfo: ['4h', 'Edited'],
  handleCommentReact: (react) => console.log('Clicked...', react),
  handleCommentInfo: (info) => console.log('Clicked...', info),
  numOfReplies: '3 Replies',
  handleReply,
  treeline: true,
  repliedComments: [
    <Comment
      avatar={<AvatarButton width="30px" height="30px" minWidth="30px" />}
      name="John Doe"
      description={description}
      reactComm={['Like', 'Reply', 'Share']}
      commentInfo={['4h', 'Edited']}
      handleCommentReact={(react) => console.log('Clicked...', react)}
      handleCommentInfo={(info) => console.log('Clicked...', info)}
      handleReply={handleReply}
      treejoint={true}
    />,
    <Comment
      avatar={<AvatarButton width="30px" height="30px" minWidth="30px" />}
      name="John Doe"
      description={description}
      reactComm={['Like', 'Reply', 'Share']}
      commentInfo={['4h', 'Edited']}
      handleCommentReact={(react) => console.log('Clicked...', react)}
      handleCommentInfo={(info) => console.log('Clicked...', info)}
      handleReply={handleReply}
      treejoint={true}
    />,
    <Comment
      avatar={<AvatarButton width="30px" height="30px" minWidth="30px" />}
      name="John Doe"
      description="Id esse veniam deserunt ion eiusmod. 😁 "
      reactComm={['Like', 'Reply', 'Share']}
      commentInfo={['4h', 'Edited']}
      handleCommentReact={(react) => console.log('Clicked...', react)}
      handleCommentInfo={(info) => console.log('Clicked...', info)}
      handleReply={handleReply}
      treejoint={true}
    />,
  ],
}

const CommentMenuStory = () => (
  <Stories argList={[commentMenu]} template={Comment} />
)

export default CommentMenuStory
