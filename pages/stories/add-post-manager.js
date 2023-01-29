import Stories from 'components/stories'
import AddPostManager from 'components/add-post-manager'
import AvatarButton from 'components/avatar-button'
import Searchbar from 'components/searchbar'
import MenuItems from 'components/menu-items'

import LiveVideoIcon from 'assets/svg/live-video.svg'
import PhotoVideoIcon from 'assets/svg/attachment.svg'
import FeelingIcon from 'assets/svg/feeling-activity.svg'

import stl from './Stories.module.scss'

const addPostManager = {
  arg: 'Add Post Manager',
  avatar: <AvatarButton width="44px" />,
  input: (
    <Searchbar
      icon="null"
      width="100%"
      placeholder="Whats on your mind, John Doe?"
      customClass={stl.hoverEffect}
    />
  ),
  buttons: [
    <MenuItems icon={<LiveVideoIcon />} label="Live video" />,
    <MenuItems icon={<PhotoVideoIcon />} label="Photo/Video" />,
    <MenuItems icon={<FeelingIcon />} label="Feeling/Activity" />,
  ],
}

const AddPostManagerStory = () => (
  <Stories argList={[addPostManager]} template={AddPostManager} />
)

export default AddPostManagerStory
