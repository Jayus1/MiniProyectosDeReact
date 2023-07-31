import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import vehicles from './data/vehicles.js';
import VehiclesView from '../View/VehiclesView.jsx';

const routes=[
  {
    path:"/",
    element: <App />,
},
];

vehicles.forEach((x)=>{
  routes.push({
    path: x.name,
    element: <VehiclesView vehicles={x}/>,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
