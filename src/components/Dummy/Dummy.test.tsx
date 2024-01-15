import { Dummy } from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import React from 'react';

describe('<Dummy />', () => {
  it('should render', () => {
    renderTheme(<Dummy />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
