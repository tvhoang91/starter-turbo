import { Title, Button } from '@yayturbo/components';

function App() {
  return (
    <div tw="mx-auto my-6 max-w-3xl rounded">
      <Title tw="text-center text-red-500 font-medium text-lg mb-6">My Title</Title>
      <div tw="grid gap-3 grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
        <Button variant="outline" color="blue">
          Click Now
        </Button>
        <Button variant="solid" color="blue">
          Click Now
        </Button>
        <Button variant="outline" color="emerald">
          Click Now
        </Button>
        <Button variant="solid" color="emerald">
          Click Now
        </Button>
      </div>
    </div>
  );
}

export default App;
