import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
