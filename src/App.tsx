import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/not_found";
import Home from "./pages/home";
import Layout from "./containers/layout";
import { ActionsPage } from "./pages/actions";
import { DeliveryPage } from "./pages/delivery";
import { LocationPage } from "./pages/location";
import { ContactsPage } from "./pages/contacts";
import { FranchisePage } from "./pages/franchise";
import { BasketPage } from "./pages/basket";
import { LoginPage } from "./pages/login";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/actions", element: <ActionsPage /> },
      { path: "/delivery", element: <DeliveryPage /> },
      { path: "/location", element: <LocationPage /> },
      { path: "/contacts", element: <ContactsPage /> },
      { path: "/franchise", element: <FranchisePage /> },
      { path: "/basket", element: <BasketPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
