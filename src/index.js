import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'
import React from 'react';


///ReactDOM.render(<App/>, document.querySelector("#root"))

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );