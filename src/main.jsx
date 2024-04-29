import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Applied from './Component/Applied/Applied';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import JobAllDetails from './Component/JobAllDeatils/JobAllDetails';
import Jobs from './Component/Jobs/Jobs';
import Root from './Component/Root/Root';
import Stayics from './Component/Statics/Stayics';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'/Applied jobs',
        element:<Applied></Applied>
      },
      {
        path:'/Blog',
        element:<Blog></Blog>
      },
      {
        path:'/statisc',
        element:<Stayics></Stayics>
      },
      {
        path:'/jobs/:id',
        element:<JobAllDetails></JobAllDetails>,
        loader:()=>fetch('../jobs.json')

      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
