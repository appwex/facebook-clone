import Stories from 'components/stories'
import IconButton from 'components/icon-button'
import NotificationIcon from 'assets/svg/bell.svg'

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
    template={IconButton}
  />
)

export default IconButtonStory
