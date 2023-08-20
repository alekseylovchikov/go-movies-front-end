import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home';
import Genres from './components/Genres';
import EditMovie from './components/EditMovie';
import ManageCatalogue from './components/ManageCatalogue';
import GraphQL from './components/GraphQL';
import Login from './components/Login';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import './styles/index.css';
import ErrorPage from './components/ErrorPage';
import { LinksAsync } from './components/Links.async';
import LinkItem from './components/LinkItem';

export const routes = [
  { index: true, element: <Home /> },
  {
    path: '/links',
    element: <LinksAsync />,
  },
  {
    path: '/links/:id',
    element: <LinkItem />,
    handle: {
      crumb: () => (
        <Link className="breadcrumb-link" to="/links">
          Links
        </Link>
      ),
    },
  },
  { path: '/genres', element: <Genres /> },
  { path: '/admin/movie/0', element: <EditMovie /> },
  { path: '/manage-catalogue', element: <ManageCatalogue /> },
  { path: '/graphql', element: <GraphQL /> },
  { path: '/login', element: <Login /> },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
