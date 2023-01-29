import Button from 'components/button'
import Tablink from 'components/tablink'

import ListViewIcon from 'assets/svg/list-view.svg'
import GridViewIcon from 'assets/svg/grid-view.svg'

import stl from './PostSetMenu.module.scss'

const PostSetMenu = () => {
  return (
    <div className={stl.container}>
      <div className={stl.row1}>
        <div className={stl.left}>Posts</div>
        <div className={stl.right}>
          <Button variant="secondary" label="Filters" />
          <Button variant="secondary" label="Manage posts" />
        </div>
      </div>
      <div className={stl.divider}></div>
      <div className={stl.row2}>
        <Tablink
          type="labeledSecondary"
          bgColor="none"
          icon={<ListViewIcon />}
          label="List view"
        />
        <Tablink
          type="labeledSecondary"
          bgColor="none"
          icon={<GridViewIcon />}
          label="Grid view"
        />
      </div>
    </div>
  )
}

export default PostSetMenu
