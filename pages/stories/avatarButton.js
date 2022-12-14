import Stories from 'components/stories'
import AvatarButton from 'components/avatarButton'

const avatarButton = {
  arg: 'Avatar Button',
}

const AvatarButtonStory = () => (
  <Stories
    argList={[avatarButton]}
    template={(args) => <AvatarButton {...args} />}
  />
)

export default AvatarButtonStory
