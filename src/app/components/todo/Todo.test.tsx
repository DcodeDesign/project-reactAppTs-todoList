import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders todo component', () => {
  render(<Todo />);
});
