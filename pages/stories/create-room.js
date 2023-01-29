import Stories from 'components/stories'
import CreateRoom from 'components/create-room'
import AvatarButton from 'components/avatar-button'

const createRoom = {
  arg: 'Create Room',
  profiles: [
    <AvatarButton key={1} variant="status" />,
    <AvatarButton key={2} variant="status" />,
    <AvatarButton key={3} variant="status" />,
    <AvatarButton key={3} variant="status" />,
    <AvatarButton key={4} variant="status" />,
    <AvatarButton key={5} variant="status" />,
    <AvatarButton key={6} variant="status" />,
    <AvatarButton key={7} variant="status" />,
    <AvatarButton key={8} variant="status" />,
    <AvatarButton key={9} variant="status" />,
    <AvatarButton key={10} variant="status" />,
    <AvatarButton key={11} variant="status" />,
    <AvatarButton key={12} variant="status" />,
    <AvatarButton key={13} variant="status" />,
  ],
  handleCreateRoom: () => console.log('Clicked...'),
}

const CreateRoomStory = () => (
  <Stories argList={[createRoom]} template={CreateRoom} />
)

export default CreateRoomStory
