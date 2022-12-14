import Stories from '../../src/components/stories'
import Searchbar from '../../src/components/searchbar'

import SearchIcon from './../../src/assets/searchIcon.svg'

const searchbar = {
  arg: 'Searchbar',
  icon: <SearchIcon />,
  placeholder: 'Search Facebook',
}

const SearchbarStory = () => (
  <Stories argList={[searchbar]} template={(args) => <Searchbar {...args} />} />
)

export default SearchbarStory
