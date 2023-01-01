import Stories from 'components/stories'
import Comment from 'components/commentBox/comment'
import AvatarButton from 'components/avatarButton'
import SearchBar from 'components/searchbar'

import InsertAvatarIcon from 'assets/svg/insertAvatarIcon.svg'
import InsertEmojiIcon from 'assets/svg/insertEmojiIcon.svg'
// import InsertAvatarIcon from 'assets/svg/insertAvatarIcon.svg'
// import InsertAvatarIcon from 'assets/svg/insertAvatarIcon.svg'

import stl from './Stories.module.scss'

const handleReply = () => {
  console.log('Clicked...')
}

const handleBtnOnInput = () => {
  console.log('Clicked...')
}

const commentMenu = {
  arg: 'Comment',
  avatar: <AvatarButton minWidth="40px" />,
  name: 'John Doe',
  description:
    'Id esse veniam deserunt fugiat reprehenderit pariatur pariatur. Aliquip Lorem commodo elit deserunt non reprehenderit ad proident non incididunt consectetur veniam ea duis. Nulla ex duis proident laborum eiusmod dolore duis dolore proident aliquip culpa non exercitation eiusmod. 😁 ',
  reactComm: ['Like', 'Reply', 'Share'],
  commentInfo: ['4h', 'Edited'],
  handleCommentReact: () => console.log('Clicked...'),
  numOfReplies: '11 Replies',
  handleReply,
  repliedComms: [
    <Comment
      avatar={<AvatarButton cusomClass={stl.avatarBtn} minWidth="30px" />}
      name="John Doe"
      description="Id esse veniam deserunt fugiat reprehenderit pariatur pariatur. Aliquip Lorem commodo elit deserunt non reprehenderit ad proident non incididunt consectetur veniam ea duis. Nulla ex duis proident laborum eiusmod dolore duis dolore proident aliquip culpa non exercitation eiusmod. 😁 "
      reactComm={['Like', 'Reply', 'Share']}
      commentInfo={['4h', 'Edited']}
      handleCommentReact={() => console.log('Clicked...')}
      numOfReplies="11 Replies"
      handleReply={handleReply}
      treeLineVar="treeLines"
      treeJointVar="treeJointsNest"
    />,
    <Comment
      avatar={<AvatarButton cusomClass={stl.avatarBtn} minWidth="30px" />}
      name="John Doe"
      description="Id esse veniam deserunt fugiat reprehenderit pariatur pariatur. Aliquip Lorem commodo elit deserunt non reprehenderit ad proident non incididunt consectetur veniam ea duis. Nulla ex duis proident laborum eiusmod dolore duis dolore proident aliquip culpa non exercitation eiusmod. 😁 "
      reactComm={['Like', 'Reply', 'Share']}
      commentInfo={['4h', 'Edited']}
      handleCommentReact={() => console.log('Clicked...')}
      numOfReplies="11 Replies"
      handleReply={handleReply}
      treeLineVar="treeLines"
      treeJointVar="treeJointsNest"
    />,
    <Comment
      avatar={<AvatarButton cusomClass={stl.avatarBtn} minWidth="30px" />}
      name="John Doe"
      description="Id esse veniam deserunt fugiat reprehenderit pariatur pariatur. Aliquip Lorem commodo elit deserunt non reprehenderit ad proident non incididunt consectetur veniam ea duis. Nulla ex duis proident laborum eiusmod dolore duis dolore proident aliquip culpa non exercitation eiusmod. 😁 "
      reactComm={['Like', 'Reply', 'Share']}
      commentInfo={['4h', 'Edited']}
      handleCommentReact={() => console.log('Clicked...')}
      numOfReplies="11 Replies"
      handleReply={handleReply}
      treeLineVar="treeLines"
      treeJointVar="treeJointsNest"
    />,
  ],
  myAvatar: <AvatarButton width="30px" height="30px" />,
  commentInput: (
    <SearchBar
      customClass={stl.searchBar}
      placeholder="Write a public comment..."
      btns={[
        { icon: <InsertAvatarIcon />, func: handleBtnOnInput },
        { icon: <InsertEmojiIcon />, func: handleBtnOnInput },
        // { icon: <InsertEmojiIcon />, func: handleBtnOnInput },
        // { icon: <InsertEmojiIcon />, func: handleBtnOnInput },
      ]}
      customClassBtns={stl.btnOnInput}
    />
  ),
}

const CommentMenuStory = () => (
  <Stories argList={[commentMenu]} template={Comment} />
)

export default CommentMenuStory
