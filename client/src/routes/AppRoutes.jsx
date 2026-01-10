import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "../components/layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-success", element: <OrderSuccess /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
