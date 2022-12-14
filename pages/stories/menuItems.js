import Stories from '../../src/components/stories'
import MenuItems from '../../src/components/menuitems'

const menuItems = {
  arg: 'Menu Items',
}

const MenuItemsStory = () => (
  <Stories argList={[menuItems]} template={(args) => <MenuItems {...args} />} />
)

export default MenuItemsStory
