import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import Security from './views/Security';
const Settings = props => {
  let { path } = useMatch();
  return (
    <div>
      <Routes>
        <Route path={`${path}/account`}>Account</Route>
        <Route path={`${path}/security`} element={<Security />}/>
      </Routes>
    </div>
  );
};

export default Settings;
