import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './LinkButton.module.scss'

const LinkButton = ({ content, onClickHandler, customClass }) => (
  <div onClick={onClickHandler} className={clsx(stl.linkButton, customClass)}>
    {content}
  </div>
)

LinkButton.defaultProps = {
  content: 'Link Button',
  onClickHandler: () => console.log('Clicked...'),
}

LinkButton.propTypes = {
  content: PropTypes.string,
  onClickHandler: PropTypes.func,
  customClass: PropTypes.string,
}

export default LinkButton
