import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Products, { loader as rootLoader } from './Products.tsx';
import ProductItem from './ProductItem.tsx';
import ShoppingCart from './ShoppingCart.tsx';
import ErrorPage from './error-page.tsx';
import './reset.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Products />,
        loader: rootLoader,
      },
      {
        path: '/product/:productId',
        element: <ProductItem />,
      },
      {
        path: '/cart',
        element: <ShoppingCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
