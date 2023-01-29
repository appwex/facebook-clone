import AvatarButton from 'components/avatar-button'
import EnterComment from 'components/comment-box/enter-comment'
import Stories from 'components/stories'

const argList = {
  arg: 'Enter Comment',
  avatarBtn: <AvatarButton width="36px" height="35px" />,
  placeholder: 'Write a public comment...',
  addAvatarHandler: () => console.log('Clicked...', 'addAvatar'),
  addEmojiHandler: () => console.log('Clicked...', 'addEmoji'),
  addGifHandler: () => console.log('Clicked...', 'addGif'),
  addPhotoHandler: () => console.log('Clicked...', 'addPhoto'),
  addStickerHandler: () => console.log('Clicked...', 'addSticker'),
  handleEnterKey: (commentVal) => console.log(commentVal),
  label: 'Press Enter to post.',
}

const EnterCommentStory = () => (
  <Stories argList={[argList]} template={EnterComment} />
)

export default EnterCommentStory
