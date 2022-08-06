import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout/>
      </div>
    </BrowserRouter>
  );
}

export default App;
