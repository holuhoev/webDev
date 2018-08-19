import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageDefault from './page-default';
import result from './mysql_con';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageDefault />, document.getElementById('page-default'));
registerServiceWorker();

