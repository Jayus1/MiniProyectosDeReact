import { Component, Suspense, useEffect, useState } from "react";
import "./App.css";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import { Router } from "./Router";
import Error404 from "./Pages/Error404";
import SearchPage from "./Pages/Search";
import { Route } from "./Route";
import { lazy } from "react";
const lazyAboutPage = lazy(() => import("./Pages/About.jsx"));
const lazyHomePage = lazy(() => import("./Pages/Home.jsx"));

//const NAVIGATION_EVENT = "pushdata";

const routes = [
  {
    path: "/:lang/about",
    Component: lazyAboutPage,
  },
  {
    path: "/Search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Mi Router</h1>
        <Router routes={routes} defaultComponent={Error404}>
          <Route path="/" Component={lazyHomePage} />
          <Route path="/about" Component={lazyAboutPage} />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
