import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoFeild from './TodoFeild';

test('renders todo component', () => {
  render(<TodoFeild />);
});
