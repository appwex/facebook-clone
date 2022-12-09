import Stories from '.././../src/components/stories'
import Tablink from '.././../src/components/tablink'

import HomeIcon from '../../src/assets/homeIcon.svg'

const tablinkPrimary = {
  arg: 'Primary',
  variant: 'primary',
  bgColor: '#1b74e4',
  icon: <HomeIcon />,
}

const tablinkSeconary = {
  arg: 'Secondary',
  variant: 'secondary',
  bgColor: 'none',
  icon: <HomeIcon />,
}

const TablinkStory = () => (
  <Stories
    argList={[tablinkPrimary, tablinkSeconary]}
    template={(args) => <Tablink {...args} />}
  />
)

export default TablinkStory
