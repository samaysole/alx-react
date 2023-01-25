import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

// ReactDOM.render(
// 	<React.StrictMode>
// 		<Notifications />
// 	</React.StrictMode>,
// 	document.getElementById('root-notifications')
// );
reportWebVitals();