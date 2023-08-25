import { Title, Button } from '../lib/components';

function App() {
  return (
    <div tw="mx-auto max-w-3xl rounded p-6">
      <Title tw="text-center text-accent-600 mb-6">My Title</Title>
      <Button tw="border-success-600 text-success-600">My Button</Button>
    </div>
  );
}

export default App;
