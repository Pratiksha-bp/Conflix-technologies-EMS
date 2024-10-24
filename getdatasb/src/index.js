import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Consume8 from "./Components/Consume8";
import Consume3 from "./Components/Consume3";
import UserName from "./Components/UserName";
import Deletebyid from "./Components/Deletebyid";
import Metainfo from "./Components/Metainfo";
import Home from "./Components/Home";
import Changepassword from "./Components/Changepassword";

const root = ReactDOM.createRoot(document.getElementById("root"));

const marg = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/getallusers" element={<Consume3/>}></Route>
      <Route path="/postuserdata" element={<Consume8/>}></Route>
      <Route path="/getuserbyname" element={<UserName/>}></Route>
      <Route path="/deletebyid" element={<Deletebyid/>}></Route>
      <Route path="/metainfo" element={<Metainfo/>}></Route>
      <Route path="/changepassword" element={<Changepassword/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      
    </Route>
  )
);

root.render(
  <RouterProvider router={marg}>
    <App/>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
