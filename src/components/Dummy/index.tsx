import * as Styled from './styles';
import React from 'react';

export type DummyProps = {
  title?: string;
};

export function Dummy({ title = 'Change me' }: DummyProps) {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
    </Styled.Wrapper>
  );
}
