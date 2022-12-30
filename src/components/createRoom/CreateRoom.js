import PropTypes from 'prop-types'
import { useEffect } from 'react'
import clsx from 'clsx'

import AvatarButton from 'components/avatarButton'

import CreateRoomIcon from 'assets/svg/createRoomIcon.svg'
import NextIcon from 'assets/svg/nextArrowIcon.svg'
import PrevIcon from 'assets/svg/prevArrowIcon.svg'

import stl from './CreateRoom.module.scss'

const CreateRoom = ({ profiles, handleCreateRoom, customClass }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ele = document.getElementById('container')
      const next = document.getElementById('nextBtn')
      if (ele.scrollWidth > ele.offsetWidth) {
        next.classList.add(stl.showNextBtn)
      } else {
        next.classList.remove(stl.showNextBtn)
      }
    }
  }, [profiles.length])

  const handleNext = () => {
    const el = document.getElementById('container')
    const width = el.offsetWidth
    el.scrollLeft += width
  }

  const handlePrev = () => {
    const el = document.getElementById('container')
    const width = el.offsetWidth
    el.scrollLeft -= width
  }

  const handleScroll = (e) => {
    const ele = e.target
    const prev = document.getElementById('prevBtn')
    const next = document.getElementById('nextBtn')
    if (ele.scrollLeft >= 150) {
      prev.classList.add(stl.showPrevBtn)
    } else {
      prev.classList.remove(stl.showPrevBtn)
    }

    if (ele.scrollLeft + ele.offsetWidth >= ele.scrollWidth) {
      next.classList.remove(stl.showNextBtn)
    } else {
      next.classList.add(stl.showNextBtn)
    }
  }

  return (
    <div className={clsx(stl.createRoom, customClass)}>
      <div
        onScroll={(e) => {
          handleScroll(e)
        }}
        id="container"
        className={stl.container}
      >
        <div
          onClick={() => {
            handlePrev()
          }}
          id="prevBtn"
          className={stl.prevBtn}
        >
          <PrevIcon />
        </div>
        <span className={stl.leftSpan}></span>
        <div
          onClick={() => {
            handleCreateRoom()
          }}
          className={stl.btn}
        >
          <CreateRoomIcon />
          Create room
        </div>
        {profiles.map((profile, i) => (
          <div key={i} className={stl.avatars}>
            {profile}
          </div>
        ))}
        <div
          onClick={() => {
            handleNext()
          }}
          id="nextBtn"
          className={stl.nextBtn}
        >
          <NextIcon />
        </div>
      </div>
    </div>
  )
}

CreateRoom.defaultProps = {
  profiles: [<AvatarButton variant="status" />],
  handleCreateRoom: () => console.log('Clicked...'),
}

CreateRoom.propTypes = {
  profiles: PropTypes.array,
  handleCreateRoom: PropTypes.func,
  customClass: PropTypes.string,
}

export default CreateRoom
