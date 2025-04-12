import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home/Home';
import Add from './pages/add/Add';
import Gigs from './pages/gigs/Gigs';
import Login from './pages/login/Login';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import MyGigs from './pages/mygigs/MyGigs';
import Orders from './pages/orders/Orders';
import Register from './pages/register/Register';
import "./app.scss";
import Gig from './pages/gig/Gig';

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/add", element: <Add /> },
        { path: "/gig/:id", element: <Gig/> },
        { path: "/gigs", element: <Gigs/> },
        { path: "/login", element: <Login /> },
        { path: "/message/:id", element: <Message /> },
        { path: "/messages", element: <Messages /> },
        { path: "/myGigs", element: <MyGigs /> },
        { path: "/orders", element: <Orders /> },
        { path: "/register", element: <Register /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
