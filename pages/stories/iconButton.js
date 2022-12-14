import Stories from 'components/stories'
import IconButton from 'components/iconbutton'
import NotificationIcon from 'assets/svg/notificationIcon.svg'

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
