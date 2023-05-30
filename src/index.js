import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import ErrorPage from './routes/ErrorPage';
import AboutDetails from './routes/AboutDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      // NESTED ROUTES/DYNAMIC ROUTES - identificador único
      {
        path: '/about/:id',
        element: <AboutDetails />
      },
      // NAVIGATE para páginas não existentes
      {
        path: 'oldabout',
        element: <Navigate to='/about'/>
      }
    ]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

