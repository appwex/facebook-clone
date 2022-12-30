import Stories from 'components/stories'
import Searchbar from 'components/searchbar'

import SearchIcon from 'assets/svg/search-icon.svg'

const searchbar = {
  arg: 'Searchbar',
  icon: <SearchIcon />,
  placeholder: 'Search Facebook',
}

const SearchbarStory = () => (
  <Stories argList={[searchbar]} template={Searchbar} />
)

export default SearchbarStory
