import React from 'react';
import { render, screen } from '@testing-library/react';
import {ChildElem} from './ChildElem';

test('renders todo component', () => {
  render(<ChildElem />);
});
