import Stories from 'components/stories'
import Dropdown from 'components/dropdown'

import stl from './Stories.module.scss'

const dropdown = {
  arg: 'Dropdown',
  label: 'Dropdown',
  listDropdown: [
    'View as',
    'Search',
    'Account Status',
    'Archive',
    'Story archive',
    'Activity log',
    'Profile and tagging settings',
    'Lock profile',
    'Turn on professional mode',
  ],
  liClass: stl.listLi,
  liOnClick: () => console.log('Clicked...'),
  closeOnClickAway: true,
  customClass: stl.display,
}

const dropDownHook = {
  arg: 'Dropdown with Hook',
  label: 'Dropdown',
  listDropdown: [
    'View as',
    'Search',
    'Account Status',
    'Archive',
    'Story archive',
    'Activity log',
    'Profile and tagging settings',
    'Lock profile',
    'Turn on professional mode',
  ],
  liClass: stl.listLi,
  liOnClick: () => console.log('Clicked...'),
  closeOnClickAway: true,
  hasHook: true,
}

const dropDownUp = {
  arg: 'Dropdown Up',
  label: 'Dropdown',
  listDropdown: [
    'View as',
    'Search',
    'Account Status',
    'Archive',
    'Story archive',
    'Activity log',
    'Profile and tagging settings',
    'Lock profile',
    'Turn on professional mode',
  ],
  liClass: stl.listLi,
  liOnClick: () => console.log('Clicked...'),
  closeOnClickAway: true,
  dropDownPos: 'up',
}

const dropDownHookUp = {
  arg: 'Dropdown Up with Hook',
  label: 'Dropdown',
  listDropdown: [
    'View as',
    'Search',
    'Account Status',
    'Archive',
    'Story archive',
    'Activity log',
    'Profile and tagging settings',
    'Lock profile',
    'Turn on professional mode',
  ],
  liClass: stl.listLi,
  liOnClick: () => console.log('Clicked...'),
  closeOnClickAway: true,
  dropDownPos: 'up',
  hasHook: true,
}

const DropDownStory = () => (
  <Stories
    argList={[dropdown, dropDownHook, dropDownUp, dropDownHookUp]}
    template={Dropdown}
  />
)

export default DropDownStory
