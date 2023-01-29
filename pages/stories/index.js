import Link from 'next/link'
import stl from './Stories.module.scss'

const StoriesLinks = () => (
  <div className={stl.wrapper}>
    <h3>Stories of Components</h3>
    <Link href="/stories/icon-button">Icon Button</Link>
    <Link href="/stories/button">Button</Link>
    <Link href="/stories/tablink">Tab Link</Link>
    <Link href="/stories/searchbar">Searchbar</Link>
    <Link href="/stories/menu-items">Menu Items</Link>
    <Link href="/stories/avatar-button">Avatar Button</Link>
    <Link href="/stories/add-post-manager">Add Post Manager</Link>
    <Link href="/stories/post-settings-menu">Post Settings Menu</Link>
    <Link href="/stories/post-box">Post Box</Link>
    <Link href="/stories/create-room">Create Room</Link>
    <Link href="/stories/dropdown">Dropdown</Link>
    <Link href="/stories/comment">Comment</Link>
    <Link href="/stories/enter-comment">Enter Comment</Link>
    <Link href="/stories/link-button">Link Button</Link>
    <Link href="/stories/comment-box">Comment Box</Link>
  </div>
)

export default StoriesLinks
