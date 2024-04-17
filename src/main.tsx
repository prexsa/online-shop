import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App, { loader as rootLoader } from './App.tsx';
import ProductItem from './ProductItem.tsx';
import ErrorPage from './error-page.tsx';
import './reset.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [],
  },
  {
    path: '/product/:productId',
    element: <ProductItem />,
    loader: rootLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
