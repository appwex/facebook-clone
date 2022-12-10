import Stories from '../../src/components/stories'
import MenuItems from '../../src/components/menuitems'

import FriendsIcon from '../../src/assets/friendsIcon2.svg'

const menuItems = {
  arg: 'Menu Items',
  icon: <FriendsIcon />,
  label: 'Friends',
}

const MenuItemsStory = () => (
  <Stories argList={[menuItems]} template={(args) => <MenuItems {...args} />} />
)

export default MenuItemsStory
