import Stories from 'components/stories'
import PostBox from 'components/postBox'

const text =
  'Ex deserunt cupidatat nulla cupidatat qui exercitation officia nulla. Exercitation consequat commodo consectetur ea esse excepteur magna. Non Lorem ex est aute Lorem nostrud incididunt sunt aliquip irure id minim mollit aliqua. Nostrud occaecat proident officia commodo consectetur aliqua eu Lorem. Tempor ut sint nulla sunt incididunt sint duis quis ad veniam ullamco nulla. Est in nisi nostrud amet dolor aliquip.'

const msg = text.split(/\n/g)

const postBox = {
  arg: 'Post Box',
  title: 'Fitness Model/Writer John Doe',
  detailName: ['Sponsored'],
  msgContent: [msg],
  media: (
    <img src="https://i.postimg.cc/DyNZSMh1/facebook-Image2.jpg" alt="image" />
  ),
  numOfComments: '161 comments',
  numOfShares: '723 shares',
  numOfReact: '2.6k',
}

const PostBoxStory = () => (
  <Stories argList={[postBox]} template={(args) => <PostBox {...args} />} />
)

export default PostBoxStory
