import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Root, loader as rootLoader } from "../layout/outlet/Outlet"
import { ErrorPage } from "../components/error/ErrorPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])
