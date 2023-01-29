import Stories from 'components/stories'
import CreateRoom from 'components/create-room'
import AvatarButton from 'components/avatar-button'

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
  <Stories argList={[createRoom]} template={CreateRoom} />
)

export default CreateRoomStory
