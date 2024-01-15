import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./components/auth/AuthProvider";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductPage, { loader as productLoader } from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {/** home page for clients */
        index: true, element: <HomePage />
      },
      {/** product catalogue for clients to view and make orders */
        path: "products", element: <ProductPage />, loader: productLoader
      },
    ],

  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;