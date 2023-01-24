import Stories from 'components/stories'
import CommentBox from 'components/commentBox'
import LinkButton from 'components/linkButton'
import CommentMenu from 'components/commentBox/commentMenu'
import Comment from 'components/commentBox/comment'
import AvatarButton from 'components/avatarButton'

const description =
  'Id esse veniam deserunt fugiat reprehenderit pariatur pariatur. Aliquip Lorem commodo elit deserunt non reprehenderit ad proident non incididunt consectetur veniam ea duis. Nulla ex duis proident laborum eiusmod dolore duis dolore proident aliquip culpa non exercitation eiusmod. 😁 '

const commentBox = {
  arg: 'Comment Box',
  // prevComment: <LinkButton content="View previous comments" />,
  prevCommentHandler: () => console.log('Clicked...'),
  typeOfComments: <CommentMenu />,
  comments: [
    <Comment
      numOfReplies="3 Replies"
      treeline={true}
      repliedComments={[
        <Comment
          avatar={<AvatarButton width="30px" height="30px" minWidth="30px" />}
          name="John Doe"
          description={description}
          reactComm={['Like', 'Reply', 'Share']}
          commentInfo={['4h', 'Edited']}
          handleCommentReact={(react) => console.log('Clicked...', react)}
          handleCommentInfo={(info) => console.log('Clicked...', info)}
          handleReply={() => console.log('Clicked...')}
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
          handleReply={() => console.log('Clicked...')}
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
          handleReply={() => console.log('Clicked...')}
          treejoint={true}
        />,
      ]}
    />,
    <Comment />,
    <Comment />,
    <Comment />,
    <Comment />,
    <Comment />,
    <Comment />,
    <Comment />,
  ],
  nextComment: <LinkButton content="View more comments" />,
  nextCommentHandler: () => console.log('Clicked...'),
}

const CommentBoxStory = () => (
  <Stories argList={[commentBox]} template={CommentBox} />
)

export default CommentBoxStory
