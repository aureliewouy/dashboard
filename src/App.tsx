import React, { FC } from 'react';
import './App.css';
import Dashboard from './Pages/dashboard/dashboard';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" Component={Dashboard} />
      <Route path="/setting" Component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
