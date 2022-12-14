import Link from 'next/link'
import stl from './Stories.module.scss'

const StoriesLinks = () => (
  <div className={stl.wrapper}>
    <h3>Stories of Components</h3>
    <Link href="/stories/iconButton">Icon Button</Link>
    <Link href="/stories/button">Button</Link>
<<<<<<< HEAD
<<<<<<< HEAD
    <Link href="/stories/tablink">Tab Link</Link>
=======
>>>>>>> 3676363 (Add Button Component)
=======
    <Link href="/stories/tablink">Tablink</Link>
    <Link href="/stories/searchbar">Searchbar</Link>
>>>>>>> 2f3533d (Add Searchbar Component)
  </div>
)

export default StoriesLinks
