import Stories from 'components/stories'
import MenuItems from 'components/menu-items'

import FriendsIcon from 'assets/svg/friends.svg'

const menuItems = {
  arg: 'Menu Items',
  icon: <FriendsIcon />,
  label: 'Friends',
}

const MenuItemsStory = () => (
  <Stories argList={[menuItems]} template={MenuItems} />
)

export default MenuItemsStory
