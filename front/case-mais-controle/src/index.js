import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Header } from './components/Header';


ReactDOM.render(
  <React.StrictMode>
    <link rel="stylesheet" 
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
              crossOrigin="anonymous" />
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

