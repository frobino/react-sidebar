import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './views/home/Home.jsx';
import Settings from './views/settings/Settings.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" to={<Home />}/>
            <Route path="/settings" to={<Settings />}>
            </Route>
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
