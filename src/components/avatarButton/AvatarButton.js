import PropTypes from 'prop-types'
import Image from 'next/image'
import clsx from 'clsx'

import stl from './AvatarButton.module.scss'

const AvatarButton = ({ imgSrc, variant, onClick, cusomClass }) => {
  return (
    <div
      onClick={() => {
        onClick()
      }}
      className={clsx(stl.container, stl[`${variant}`], cusomClass)}
    >
      <div>
        <Image src={`${imgSrc}`} width="40" height="40" />
      </div>
    </div>
  )
}

AvatarButton.defaultProps = {
  imgSrc: 'https://i.postimg.cc/xT7Y3ZxR/profile.jpg',
  variant: 'noStatus',
  onClick: () => console.log('Clicked...'),
}

AvatarButton.propTypes = {
  imgSrc: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
}

export default AvatarButton
