import Root from './routes/home.tsx'
import React from 'react';
import ErrorPage from "./error-page";
import ReactDOM from 'react-dom/client'
import MovieList from "./routes/movieList.tsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
      {
        path: "/movies",
        element: <MovieList />,
      }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
