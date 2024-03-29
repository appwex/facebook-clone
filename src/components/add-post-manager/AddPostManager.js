import PropTypes from 'prop-types'
import clsx from 'clsx'

import AvatarButton from 'components/avatar-button'
import Searchbar from 'components/searchbar'
import MenuItems from 'components/menu-items'

import LiveVideoIcon from 'assets/svg/live-video.svg'
import PhotoVideoIcon from 'assets/svg/attachment.svg'
import FeelingIcon from 'assets/svg/feeling-activity.svg'

import stl from './AddPostManager.module.scss'

const AddPostManager = ({ avatar, input, buttons, customClass }) => (
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
    <MenuItems key={1} icon={<LiveVideoIcon />} label="Live video" />,
    <MenuItems key={2} icon={<PhotoVideoIcon />} label="Photo/Video" />,
    <MenuItems key={3} icon={<FeelingIcon />} label="Feeling/Activity" />,
  ],
}

AddPostManager.propTypes = {
  avatar: PropTypes.node,
  input: PropTypes.node,
  buttons: PropTypes.array,
  customClass: PropTypes.string,
}

export default AddPostManager
