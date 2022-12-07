import Stories from '../../src/components/stories'
import ExampleComponent from '../../src/components/examplecomponent'

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
