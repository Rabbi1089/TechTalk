import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import BlogDetail from "../../pages/BlogDetail";
import Content from "../Content";
import Author from "../Author";
import Bookmarks from "../../pages/Bookmarks";

export const router = createBrowserRouter([
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
        children: [
          {
            index: "true",
            element: <Content />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },

          {
            path: "Author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },

      {
        path: "bookmark",
        element: <Bookmarks />,
      },
    ],
  },
]);
