import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="page-shell">
      {currentPage === 'home' ? (
        <HomePage onNavigate={setCurrentPage} />
      ) : (
        <SignupPage onNavigate={setCurrentPage} />
      )}
    </div>
  );
}
