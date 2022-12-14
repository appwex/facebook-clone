import Stories from '../../src/components/stories'
import Button from '../../src/components/button'

<<<<<<< HEAD
import AddIcon from '../../src/assets/plus.svg'
=======
import AddIcon from '../../src/assets/addIcon.svg'
>>>>>>> ef7cf4b (Add Button Component)

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
<<<<<<< HEAD
  <Stories argList={[buttonPrimary, buttonSecondary]} template={Button} />
=======
  <Stories
    argList={[buttonPrimary, buttonSecondary]}
    template={(args) => <Button {...args} />}
  />
>>>>>>> ef7cf4b (Add Button Component)
)

export default ButtonStory
