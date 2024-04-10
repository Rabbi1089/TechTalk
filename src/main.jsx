import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import MainLayout from './layout/MainLayout.jsx'
const router = createBrowserRouter([
  
{
  path : "/",
  element : <MainLayout />,
  children : [
    {
      path : "/",
      element : <Home />
    },

    {
      path : "blog",
      element : <Blog />
    },

    {
      path : "bookmark",
      element : <Bookmarks />
    }


  ]
},

])



ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
)
