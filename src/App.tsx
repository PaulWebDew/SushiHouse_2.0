import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.tsx";
import { NotFound } from "./pages/not_found";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      // { path: "/box1", element: <Box1 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
