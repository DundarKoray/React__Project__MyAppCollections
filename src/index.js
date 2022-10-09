// import React from 'react';
// import ReactDOM from 'react-dom';

//This is the new way react18 
import ReactDOM from 'react-dom/client';
import App from './App';


// ReactDOM.render(
  
//     <App />
//   ,
//   document.getElementById('root')
// );

//This is the new way react18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

