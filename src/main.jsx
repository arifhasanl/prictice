import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import CreateUser from './CreateUser/CreateUser';
import Edit from './Edit/Edit';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path:'/crateuser',
    element:<CreateUser></CreateUser>
  },
  {
    path:'/edit',
    element:<Edit></Edit>
  }

  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
