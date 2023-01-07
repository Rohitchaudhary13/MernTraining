import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyNotes from '../src/pages/MyNotes'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<LandingPage />),
  },
  {
    path: "mynotes",
    element:(<MyNotes />),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

