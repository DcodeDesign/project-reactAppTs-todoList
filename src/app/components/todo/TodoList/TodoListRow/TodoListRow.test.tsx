import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoListRow from './TodoListRow';

test('renders todo component', () => {
  render(<TodoListRow />);
});
