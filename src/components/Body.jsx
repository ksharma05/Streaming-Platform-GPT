import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router'
import Header from './Header';

const Body = () => {
  return (
   <div>
    <Header />
    <RouterProvider router={appRouter} />
      
   </div>
  )
}

const appRouter = createBrowserRouter([
{
  path: '/',
  element: <Login />
},
{
  path: '/browse',
  element: <Browse />
}
])

export default Body;