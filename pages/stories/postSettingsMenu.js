import Stories from 'components/stories'
import PostSetMenu from 'components/postSettingsMenu'

const postSetMenu = {
  arg: 'Post Settings Menu',
}

const PostSetMenuStory = () => (
  <Stories argList={[postSetMenu]} template={PostSetMenu} />
)

export default PostSetMenuStory
