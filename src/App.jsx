import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesManagement from "./pages/movie-management";
import Layout from "./components/layout";
import HomePage from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/movie-management",
          element: <MoviesManagement />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
