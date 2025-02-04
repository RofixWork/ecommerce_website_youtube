import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";

{
  /* <Route index element={<Home />} />
<Route path="/categories" element={<h2>My Categories</h2>} />
<Route path="/*" element={<NotFound />} /> */
}
const mainRoutes = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/categories",
    component: <h2>My Categories</h2>,
  },
  {
    id: 4,
    path: "/products",
    component: <Products />,
  },
  {
    id: 3,
    path: "/*",
    component: <NotFound />,
  },
];

export { mainRoutes };
