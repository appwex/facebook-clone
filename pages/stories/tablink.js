import Stories from 'components/stories'
import Tablink from 'components/tablink'

import HomeIcon from 'assets/svg/homeIcon.svg'
import ListViewIcon from 'assets/svg/listViewIcon.svg'
import GridViewIcon from 'assets/svg/gridViewIcon.svg'

const tablinkPrimary = {
  arg: 'Primary',
  variant: 'primary',
  type: 'noLabel',
  bgColor: '#1b74e4',
  icon: <HomeIcon />,
}

const tablinkSeconary = {
  arg: 'Secondary',
  variant: 'secondary',
  type: 'noLabel',
  bgColor: 'none',
  icon: <HomeIcon />,
}

const tablinkLabeledPrimary = {
  arg: 'Labeled Primary',
  type: 'labeledPrimary',
  bgColor: 'none',
  icon: <ListViewIcon />,
  label: 'List view',
}

const tablinkLabeledSecondary = {
  arg: 'Labeled Secondary',
  type: 'labeledSecondary',
  bgColor: 'none',
  icon: <GridViewIcon />,
  label: 'Grid view',
}

const TablinkStory = () => (
  <Stories
    argList={[
      tablinkPrimary,
      tablinkSeconary,
      tablinkLabeledPrimary,
      tablinkLabeledSecondary,
    ]}
    template={Tablink}
  />
)

export default TablinkStory
