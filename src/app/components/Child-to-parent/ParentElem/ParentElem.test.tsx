import React from 'react';
import { render, screen } from '@testing-library/react';
import {ParentElem} from './ParentElem';

test('renders todo component', () => {
  render(<ParentElem />);
});
