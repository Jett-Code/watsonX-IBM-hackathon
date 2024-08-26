import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/dashboard/:category" element={<Dashboard/>} />
      </Routes>
    </div>
  </Router>
);

export default App;