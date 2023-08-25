import { Title, Button } from '@yayturbo/components';
import { SemanticColorName } from '@yayturbo/components/types/theme.type';
import React from 'react';
import Tag from './Tag';

const colors: SemanticColorName[] = ['primary', 'secondary', 'accent', 'success', 'warning', 'error'];

function App() {
  return (
    <div tw="mx-auto my-6 max-w-3xl rounded">
      <Title tw="text-center text-accent-500 mb-6">My Title</Title>
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
      <div tw="grid gap-3 grid-cols-6 mt-6">
        <Tag tw="bg-success-500 text-success-content">Done</Tag>
        <Tag tw="bg-info-500 text-info-content">Progress</Tag>
        <Tag tw="bg-warning-500 text-warning-content">Urgent</Tag>
        <Tag tw="bg-error-500 text-error-content">Bug</Tag>
      </div>
    </div>
  );
}

export default App;
