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
  </div>
)

export default StoriesLinks
