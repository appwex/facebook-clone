import PropTypes from 'prop-types'
import clsx from 'clsx'

import AvatarButton from 'components/avatarButton'
import Searchbar from 'components/searchbar'
import MenuItems from 'components/menuitems'

import LiveVideoIcon from 'assets/svg/liveVideoIcon.svg'
import PhotoVideoIcon from 'assets/svg/photoVideoIcon.svg'
import FeelingIcon from 'assets/svg/feelingActivityIcon.svg'

import stl from './AddPostManager.module.scss'

const AddPostManager = ({ avatar, input, buttons, customClass }) => {
  return (
    <div className={clsx(stl.container, customClass)}>
      <div className={stl.row1}>
        {avatar}
        {input}
      </div>
      <div className={stl.divider}></div>
      <div className={stl.row2}>
        {buttons.map((btn, i) => {
          return (
            <div key={i} className={stl.btn}>
              {btn}
            </div>
          )
        })}
      </div>
    </div>
  )
}

AddPostManager.defaultProps = {
  avatar: <AvatarButton width="44px" />,
  input: (
    <Searchbar
      icon="null"
      width="100%"
      placeholder="Whats on your mind, John Doe?"
      customClass={stl.hoverEffect}
    />
  ),
  buttons: [
    <MenuItems icon={<LiveVideoIcon />} label="Live video" />,
    <MenuItems icon={<PhotoVideoIcon />} label="Photo/Video" />,
    <MenuItems icon={<FeelingIcon />} label="Feeling/Activity" />,
  ],
}

AddPostManager.propTypes = {
  avatar: PropTypes.node,
  input: PropTypes.node,
  buttons: PropTypes.array,
}

export default AddPostManager
