import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Root from "./Root";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Blog/Post";
import MyWork from "./pages/MyWork";
import PinBoard from "./pages/PinBoard";
import Me from "./pages/Me";
import Post1 from "./pages/Blog/posts/Post1"

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/post",
        element: <Post />,
      },
      {
        path:"/blog/post/1",
        element: <Post1 />
      },
      {
        path: "/my-work",
        element: <MyWork />,
      },
      {
        path: "/pinboard",
        element: <PinBoard />,
      },
      {
        path: "/me",
        element: <Me />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
