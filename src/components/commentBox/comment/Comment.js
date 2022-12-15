import AvatarButton from 'components/avatarButton'

import stl from './Comment.module.scss'

const Comment = ({ name, description, customClass }) => {
  const text = description.split('\n')

  return (
    <div className={stl.container}>
      <div className={stl.avatar}>
        <AvatarButton />
      </div>
      <div className={stl.content}>
        <div className={stl.comment}>
          <span className={stl.name}>{name}</span>
          {text.map((portion, i) => {
            if (portion === '') {
              return <br key={i} />
            } else {
              return (
                <span key={i} className={stl.desc}>
                  {portion}
                </span>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Comment
