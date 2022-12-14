import Stories from 'components/stories'
import Button from 'components/button'

import AddIcon from 'assets/plus.svg'

const buttonPrimary = {
  arg: 'Primary',
  variant: 'primary',
  icon: <AddIcon />,
  label: 'Button',
}

const buttonSecondary = {
  arg: 'Secondary',
  variant: 'secondary',
  icon: <AddIcon />,
  label: 'Button',
}

const ButtonStory = () => (
  <Stories argList={[buttonPrimary, buttonSecondary]} template={Button} />
)

export default ButtonStory
