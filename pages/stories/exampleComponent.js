import Stories from 'components/stories'
import ExampleComponent from 'components/examplecomponent'

const exampleComponent = {
  arg: 'Example Component',
}

const ExampleComponentStory = () => (
  <Stories
    argList={[exampleComponent]}
    template={(args) => <ExampleComponent {...args} />}
  />
)

export default ExampleComponentStory
