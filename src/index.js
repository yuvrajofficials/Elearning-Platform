import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StudyMaterial from './WebPages/StudyMaterial';
import MyCourse from './WebPages/MyCourse';
import ProfilePage from './WebPages/ProfilePage';
import YourProgress from './WebPages/YourProgress';
import Homepage from './WebPages/Homepage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/studymaterial",
    element: <StudyMaterial/>,
  },
  {
    path: "/mycourse",
    element: <MyCourse/>,
  },
  {
    path: "/profile",
    element: <ProfilePage/>,
  },
  {
    path: "/progress",
    element: <YourProgress/>,
  },
  {
    path: "/home",
    element: <Homepage/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router}/>
    


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
