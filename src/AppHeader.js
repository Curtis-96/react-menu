import React from 'react';
import { Link } from 'react-router-dom';

export default function AppHeader({ title = 'Restaurateur.io' }) {
  return (
    <header className="App-header">
      <Link to="/" className="App-header-logo">
        <h1>{title}</h1>
      </Link>
    </header>
  );
}