import Stories from 'components/stories'
import AvatarButton from 'components/avatarButton'

const avatarButton = {
  arg: 'Avatar Button',
  imgSrc: 'https://i.postimg.cc/xT7Y3ZxR/profile.jpg',
  variant: 'noStatus',
}

const avatarButtonStatus = {
  arg: 'Avatar Button Status',
  imgSrc: 'https://i.postimg.cc/xT7Y3ZxR/profile.jpg',
  variant: 'status',
}

const avatarButtonBordered = {
  arg: 'Avatar Button Bordered',
  imgSrc: 'https://i.postimg.cc/xT7Y3ZxR/profile.jpg',
  variant: 'bordered',
}

const AvatarButtonStory = () => (
  <Stories
    argList={[avatarButton, avatarButtonStatus, avatarButtonBordered]}
    template={AvatarButton}
  />
)

export default AvatarButtonStory
