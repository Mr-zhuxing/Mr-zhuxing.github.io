import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const jsx = (
  <section>
    <h1>慢慢</h1>
    <h1>全栈</h1>
    <a href="www.baidu.com">kkb</a>
  </section>
)

console.log(jsx)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
