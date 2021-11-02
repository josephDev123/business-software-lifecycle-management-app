import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {PostStore} from './component/container_redux/postStore';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={PostStore}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

