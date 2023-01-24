import Stories from 'components/stories'
import PostBox from 'components/postBox'

import IconButton from 'components/iconbutton'
import Tablink from 'components/tablink'
import CommentMenu from 'components/commentBox/commentMenu'
import Comment from 'components/commentBox/comment'
import AvatarButton from 'components/avatarButton'
import LinkButton from 'components/linkButton'

import MoreIcon from 'assets/svg/moreIcon.svg'
import CloseIcon from 'assets/svg/crossIcon.svg'
import LikeIcon2 from 'assets/svg/likeIcon.svg'
import CommentIcon from 'assets/svg/commentIcon.svg'
import ShareIcon from 'assets/svg/shareIcon.svg'

import stl from './Stories.module.scss'
import CommentBox from 'components/commentBox'

const description =
  'Id esse veniam deserunt fugiat reprehenderit pariatur pariatur. Aliquip Lorem commodo elit deserunt non reprehenderit ad proident non incididunt consectetur veniam ea duis. Nulla ex duis proident laborum eiusmod dolore duis dolore proident aliquip culpa non exercitation eiusmod. 😁 '

const text =
  'Ex deserunt cupidatat nulla cupidatat qui exercitation officia nulla. Exercitation consequat commodo consectetur ea esse excepteur magna. Non Lorem ex est aute Lorem nostrud incididunt sunt aliquip irure id minim mollit aliqua. Nostrud occaecat proident officia commodo consectetur aliqua eu Lorem. Tempor ut sint nulla sunt incididunt sint duis quis ad veniam ullamco nulla. Est in nisi nostrud amet dolor aliquip.'

const msg = text.split(/\n/g)

const postBox = {
  arg: 'Post Box',
  title: 'Fitness Model/Writer John Doe',
  detailName: ['Sponsored'],
  buttons: [
    <IconButton
      variant="secondary"
      customClass={stl.button}
      bgColor="none"
      icon={<MoreIcon />}
    />,
    <IconButton
      bgColor="none"
      variant="secondary"
      customClass={stl.button}
      icon={<CloseIcon />}
    />,
  ],
  msgContent: [msg],
  media: (
    <img src="https://i.postimg.cc/DyNZSMh1/facebook-Image2.jpg" alt="image" />
  ),
  numOfComments: '161 comments',
  handleComment: () => console.log('Clicked...'),
  numOfShares: '723 shares',
  handleShare: () => console.log('Clicked...'),
  numOfReact: '2.6k',
  handleReact: () => console.log('Clicked...'),
  interactOpt: [
    <Tablink
      key={1}
      type="labeledSecondary"
      bgColor="none"
      icon={<LikeIcon2 />}
      label="Like"
      customClass={stl.tablink}
    />,
    <Tablink
      key={2}
      type="labeledSecondary"
      bgColor="none"
      icon={<CommentIcon />}
      label="Comment"
      customClass={stl.tablink}
    />,
    <Tablink
      key={3}
      type="labeledSecondary"
      bgColor="none"
      icon={<ShareIcon />}
      label="Share"
      customClass={stl.tablink}
    />,
  ],
  comments: (
    <CommentBox
      // prevComment: <LinkButton content="View previous comments" />
      typeOfComments={<CommentMenu />}
      comments={[
        <Comment
          numOfReplies="3 Replies"
          treeline={true}
          repliedComments={[
            <Comment
              avatar={
                <AvatarButton width="30px" height="30px" minWidth="30px" />
              }
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
              avatar={
                <AvatarButton width="30px" height="30px" minWidth="30px" />
              }
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
              avatar={
                <AvatarButton width="30px" height="30px" minWidth="30px" />
              }
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
        <Comment />,
      ]}
      nextComment={<LinkButton content="View more comments" />}
    />
  ),
}

const PostBoxStory = () => <Stories argList={[postBox]} template={PostBox} />

export default PostBoxStory
