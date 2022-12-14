import Stories from 'components/stories'
import MenuItems from 'components/menuitems'

import FriendsIcon from 'assets/svg/friendsIcon2.svg'

import FriendsIcon from '../../src/assets/friendsIcon2.svg'

const menuItems = {
  arg: 'Menu Items',
  icon: <FriendsIcon />,
  label: 'Friends',
}

const MenuItemsStory = () => (
  <Stories argList={[menuItems]} template={MenuItems} />
)

export default MenuItemsStory
