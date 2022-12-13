import PropTypes from 'prop-types'
import clsx from 'clsx'

import CreateRoomIcon from 'assets/svg/createRoomIcon.svg'
import NextIcon from 'assets/svg/nextArrowIcon.svg'
import PrevIcon from 'assets/svg/prevArrowIcon.svg'

import stl from './CreateRoom.module.scss'

const CreateRoom = ({ profiles, customClass }) => {
  return (
    <div className={clsx(stl.createRoom, customClass)}>
      <div className={stl.container}>
        <div className={stl.prevBtn}>
          <PrevIcon />
        </div>
        <span className={stl.leftSpan}></span>
        <div className={stl.btn}>
          <CreateRoomIcon />
          Create room
        </div>
        {profiles.map((profile, i) => (
          <div key={i} className={stl.avatars}>
            {profile}
          </div>
        ))}
        <span className={stl.rightSpan}></span>
        <div className={stl.nextBtn}>
          <NextIcon />
        </div>
      </div>
    </div>
  )
}

export default CreateRoom
