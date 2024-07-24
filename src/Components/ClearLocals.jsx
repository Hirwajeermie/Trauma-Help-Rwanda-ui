import React from 'react';
import { Link } from 'react-router-dom';

const DebugClearLocalStorage = () => {
  const clearStorage = () => {
    localStorage.clear();
    alert('LocalStorage cleared');
  };

  return (
    <Link onClick={clearStorage}>Clear Localas</Link>
  );
};

export default DebugClearLocalStorage;
