import Link from 'next/link'

import stl from './Homepage.module.scss'

const Homepage = () => {
  return (
    <div className={stl.wrapper}>
      <Link href="/stories">Go to Stories 🚀</Link>
    </div>
  )
}

export default Homepage
