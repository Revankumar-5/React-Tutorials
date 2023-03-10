import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import ReducerExample from './App';
// import LayoutEffectExample from './LayoutEffectExample'
// import reportWebVitals from './reportWebVitals';
// import DeferredValueExample from './DeferredValueExample'
// import UseTransitionExample from './UseTransitionExample'
// import TimeoutComponent from './UseTimeout/UseTimeOut'
// import ReducerExampleIndex from "./ReducerExample/ReducerExampleIndex"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LayoutEffectExample /> */}
    {/* <DeferredValueExample /> */}
    {/* <UseTransitionExample /> */}
    {/* <TimeoutComponent /> */}
    <App/>
    {/* <ReducerExampleIndex /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
