import PropTypes from 'prop-types'
import Image from 'next/image'
import clsx from 'clsx'

import stl from './AvatarButton.module.scss'

const AvatarButton = ({ imgSrc, variant, alt, width, onClick, cusomClass }) => {
  return (
    <div
      onClick={() => {
        onClick()
      }}
      style={{ width: width }}
      className={clsx(stl.container, stl[`${variant}`], cusomClass)}
    >
      <div>
        <Image src={`${imgSrc}`} width="40" height="40" alt={alt} />
      </div>
    </div>
  )
}

AvatarButton.defaultProps = {
  imgSrc: 'https://i.postimg.cc/xT7Y3ZxR/profile.jpg',
  variant: 'noStatus',
  alt: 'accPic',
  onClick: () => console.log('Clicked...'),
}

AvatarButton.propTypes = {
  imgSrc: PropTypes.string,
  variant: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
}

export default AvatarButton
