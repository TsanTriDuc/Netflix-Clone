import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesManagement from "./pages/movie-management";
import Layout from "./components/layout";
import HomePage from "./pages/home";
import Login from "./pages/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/movie-management",
          element: <MoviesManagement />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
