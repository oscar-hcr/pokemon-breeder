import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Pokesearch from "./routes/Pokesearch";
import Home from "./routes/Home";
import FavoritePokemons from "./routes/Favorites";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "pokesearch",
        element: <Pokesearch />,
      },
      {
        path: "favorites",
        element: <FavoritePokemons />,
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />

);