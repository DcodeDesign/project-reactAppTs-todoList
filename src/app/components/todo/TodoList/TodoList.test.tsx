import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders todo component', () => {
  render(<TodoList />);
});
