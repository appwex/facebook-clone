import Stories from 'components/stories'
import LinkButton from 'components/linkButton'

const linkButton = {
  arg: 'Link Button',
  content: 'Link Button',
  onClickHandler: () => console.log('Clicked...'),
}

const LinkButtonStory = () => (
  <Stories argList={[linkButton]} template={LinkButton} />
)

export default LinkButtonStory
