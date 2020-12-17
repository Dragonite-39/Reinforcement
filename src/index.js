import React from "react";
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import { ReactReduxContext } from "react-redux";
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import store from './store';

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello World from React boilerplate</h1>;
//   }
// }
// ReactDOM.render(<Welcome />, document.getElementById("root"));

render (
  <Provider store = { store }>

    <App />
    
  </Provider>,
  document.getElementById('root')
);


