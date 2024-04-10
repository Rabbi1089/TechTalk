import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "blog",
        element: <Blog />,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },

      {
        path: "/BlogDetail/:id",
        element: <BlogDetail />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
      },

      {
        path: "bookmark",
        element: <Bookmarks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
