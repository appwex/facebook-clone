import Link from 'next/link'
import stl from './Stories.module.scss'

const StoriesLinks = () => (
  <div className={stl.wrapper}>
    <h3>Stories of Components</h3>
    <Link href="/stories/iconButton">Icon Button</Link>
    <Link href="/stories/button">Button</Link>
    <Link href="/stories/tablink">Tab Link</Link>
    <Link href="/stories/searchbar">Searchbar</Link>
    <Link href="/stories/menuItems">Menu Items</Link>
    <Link href="/stories/avatarButton">Avatar Button</Link>
    <Link href="/stories/addPostManager">Add Post Manager</Link>
    <Link href="/stories/postSettingsMenu">Post Settings Menu</Link>
    <Link href="/stories/postBox">Post Box</Link>
    <Link href="/stories/createRoom">Create Room</Link>
    <Link href="/stories/dropdown">Dropdown</Link>
    <Link href="/stories/comment">Comment Menu</Link>
    <Link href="/stories/dropDown">Dropdown</Link>
    <Link href="/stories/comment">Comment</Link>
  </div>
)

export default StoriesLinks
