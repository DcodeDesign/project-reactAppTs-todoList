import React from 'react';
import { render, screen } from '@testing-library/react';
import {ChildToParent} from './ChildToParent';

test('renders todo component', () => {
  render(<ChildToParent />);
});
