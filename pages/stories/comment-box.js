import Stories from 'components/stories'
import CommentBox from 'components/comment-box'
import LinkButton from 'components/link-button'
import CommentMenu from 'components/comment-box/comment-menu'
import Comment from 'components/comment-box/comment'
import AvatarButton from 'components/avatar-button'

const description =
  'Id esse veniam deserunt fugiat reprehenderit pariatur pariatur. Aliquip Lorem commodo elit deserunt non reprehenderit ad proident non incididunt consectetur veniam ea duis. Nulla ex duis proident laborum eiusmod dolore duis dolore proident aliquip culpa non exercitation eiusmod. 😁 '

const commentBox = {
  arg: 'Comment Box',
  // prevComment: <LinkButton content="View previous comments" />,
  prevCommentHandler: () => console.log('Clicked...'),
  typeOfComments: <CommentMenu />,
  comments: [
    <Comment
      key={11}
      numOfReplies="3 Replies"
      treeline={true}
      repliedComments={[
        <Comment
          key={1}
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
          key={2}
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
          key={3}
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
    <Comment key={4} />,
    <Comment key={5} />,
    <Comment key={6} />,
    <Comment key={7} />,
    <Comment key={8} />,
    <Comment key={9} />,
    <Comment key={10} />,
  ],
  nextComment: <LinkButton content="View more comments" />,
  nextCommentHandler: () => console.log('Clicked...'),
}

const CommentBoxStory = () => (
  <Stories argList={[commentBox]} template={CommentBox} />
)

export default CommentBoxStory
