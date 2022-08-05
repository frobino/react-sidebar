import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';

const Security = props => {
  let { path } = useMatch();
  console.log('security', { path });
  return (
    <Routes>
      <Route path={`${path}/credentials`}>Credentials</Route>
      <Route path={`${path}/2fa`}>Two factor authentication</Route>
    </Routes>
  );
};

export default Security;
