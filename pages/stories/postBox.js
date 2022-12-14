import Stories from 'components/stories'
import PostBox from 'components/postBox'

import IconButton from 'components/iconbutton'
import Tablink from 'components/tablink'

import MoreIcon from 'assets/svg/moreIcon.svg'
import CloseIcon from 'assets/svg/crossIcon.svg'
import LikeIcon2 from 'assets/svg/likeIcon.svg'
import CommentIcon from 'assets/svg/commentIcon.svg'
import ShareIcon from 'assets/svg/shareIcon.svg'

import stl from './Stories.module.scss'

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
      icon={<MoreIcon />}
    />,
    <IconButton
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
  numOfShares: '723 shares',
  numOfReact: '2.6k',
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
}

const PostBoxStory = () => (
  <Stories argList={[postBox]} template={(args) => <PostBox {...args} />} />
)

export default PostBoxStory
