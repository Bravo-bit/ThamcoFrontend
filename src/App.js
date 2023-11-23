import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {/** home page for clients */
        path: "/", element: <HomePage />
      },
      {/** product catalogue for clients to view and make orders */
        path: "/products", element: <ProductPage />
      },
      {/** product's information  */
        path: "/products/:productId", element: <ProductDetails />
      }
    ],

  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
