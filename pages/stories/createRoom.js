import Stories from 'components/stories'
import CreateRoom from 'components/createRoom'
import AvatarButton from 'components/avatarButton'

const createRoom = {
  arg: 'Create Room',
  profiles: [
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
    <AvatarButton variant="status" />,
  ],
  handleCreateRoom: () => console.log('Clicked...'),
}

const CreateRoomStory = () => (
  <Stories
    argList={[createRoom]}
    template={(args) => <CreateRoom {...args} />}
  />
)

export default CreateRoomStory
