import Stories from '../../src/components/stories'
import Button from '../../src/components/button'

import AddIcon from '../../src/assets/plus.svg'

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
  <Stories
    argList={[buttonPrimary, buttonSecondary]}
    template={(args) => <Button {...args} />}
  />
)

export default ButtonStory
