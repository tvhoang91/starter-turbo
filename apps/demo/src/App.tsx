import { Title, Button } from '@yayturbo/components';
import { SemanticColorName } from '@yayturbo/components/types/theme.type';
import React from 'react';

const colors: SemanticColorName[] = ['primary', 'secondary', 'accent', 'success', 'warning', 'error'];

function App() {
  return (
    <div tw="mx-auto my-6 max-w-3xl rounded">
      <Title tw="text-center text-accent-500 font-medium text-lg mb-6">My Title</Title>
      <div tw="grid gap-3 grid-cols-4">
        {colors.map((color) => (
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
