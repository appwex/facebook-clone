import Stories from 'components/stories'
import AddPostManager from 'components/addPostManager'
import AvatarButton from 'components/avatarButton'
import Searchbar from 'components/searchbar'
import MenuItems from 'components/menuitems'

import LiveVideoIcon from 'assets/svg/liveVideoIcon.svg'
import PhotoVideoIcon from 'assets/svg/photoVideoIcon.svg'
import FeelingIcon from 'assets/svg/feelingActivityIcon.svg'

const addPostManager = {
  arg: 'Add Post Manager',
  avatar: <AvatarButton width="44px" />,
  input: (
    <Searchbar
      icon="null"
      width="100%"
      placeholder="Whats on your mind, John Doe?"
    />
  ),
  buttons: [
    <MenuItems icon={<LiveVideoIcon />} label="Live video" />,
    <MenuItems icon={<PhotoVideoIcon />} label="Photo/Video" />,
    <MenuItems icon={<FeelingIcon />} label="Feeling/Activity" />,
  ],
}

const AddPostManagerStory = () => (
  <Stories
    argList={[addPostManager]}
    template={(args) => <AddPostManager {...args} />}
  />
)

export default AddPostManagerStory
