import Stories from '../../src/components/stories'
import IconButton from '../../src/components/iconbutton'
import NotificationIcon from '../../src/assets/notificationIcon.svg'

const iconButtonPrimary = {
  arg: 'Primary',
  variant: 'primary',
  icon: <NotificationIcon />,
}

const iconButtonSecondary = {
  arg: 'Secondary',
  variant: 'secondary',
  icon: <NotificationIcon />,
}

const IconButtonStory = () => (
  <Stories
    argList={[iconButtonPrimary, iconButtonSecondary]}
    template={(args) => <IconButton {...args} />}
  />
)

export default IconButtonStory
