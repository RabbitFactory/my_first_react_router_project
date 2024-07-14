import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Homepage from './components/Homepage/Homepage.jsx';
import Listed_books from './components/Listed Books/Listed_books.jsx';
import Page_to_read from './components/Page to Read/Page_to_read.jsx';
import Favorites from './components/Our Favorites/Favorites.jsx';
import Contact from './components/Contact us/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        index:true,
        element: <Homepage />
      },
      {
        path: "listed_books",
        element: <Listed_books />
      },
      {
        path: "pages_to_read",
        element: <Page_to_read />
      },
      {
        path: "our_favorites",
        element: <Favorites />
      },
      {
        path: "contact_us",
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
