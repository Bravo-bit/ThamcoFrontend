import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
import Customer from "./pages/admin/Customer";
import ProductCatalogue from "./pages/admin/ProductCatalogue";
import ProductOrders from "./pages/admin/ProductOrders";
import CustomerOrders from "./pages/admin/CustomerOrders";

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

  },
  {
    path: "/admin",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {/** admin page to view orders made by customers */
        path: "/admin/custOrders", element: <CustomerOrders />
      },
      {/** admin page to order products from suppliers */
        path: "/admin/productorders", element: <ProductOrders />
      },
      {/** admin page to view and delete customer accounts */
        path: "/admin/editCust", element: <Customer />
      },
      {/** admin page to update product catalogue */
        path: "/admin/catalogue", element: <ProductCatalogue />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
