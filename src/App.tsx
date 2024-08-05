import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './pages/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
