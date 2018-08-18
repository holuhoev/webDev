import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageDefault from './page-default';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageDefault />, document.getElementById('page-default'));
registerServiceWorker();

