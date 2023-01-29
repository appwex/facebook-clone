import Stories from 'components/stories'
import Button from 'components/button'

import PlusIcon from 'assets/svg/plus.svg'

const buttonPrimary = {
  arg: 'Primary',
  variant: 'primary',
  icon: <PlusIcon />,
  label: 'Button',
}

const buttonSecondary = {
  arg: 'Secondary',
  variant: 'secondary',
  icon: <PlusIcon />,
  label: 'Button',
}

const ButtonStory = () => (
  <Stories argList={[buttonPrimary, buttonSecondary]} template={Button} />
)

export default ButtonStory
