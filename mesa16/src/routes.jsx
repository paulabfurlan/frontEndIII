import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";

import FormularioPage from "./pages/formulario";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/formulario/:id",
    element: <FormularioPage />,
  },
]);

function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
