import React from 'react';
import ReactDOM from 'react-dom';
import PageDefault from './page-default';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageDefault />, div);
  ReactDOM.unmountComponentAtNode(div);
});