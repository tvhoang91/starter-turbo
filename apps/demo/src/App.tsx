import { Title, Button } from '@yayturbo/components';
import React from 'react';

function App() {
  return (
    <div tw="mx-auto my-6 max-w-3xl rounded">
      <Title tw="text-center text-accent-500 font-medium text-lg mb-6">My Title</Title>
      <div tw="grid gap-3 grid-cols-4">
        {['primary', 'secondary', 'accent', 'success', 'warning', 'error'].map((color) => (
          <React.Fragment key={color}>
            <Button color={color} variant="solid">
              Solid
            </Button>
            <Button color={color} variant="outline">
              Outline
            </Button>
            <Button color={color} variant="dashed">
              Dashed
            </Button>
            <Button color={color} variant="link">
              Link
            </Button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
