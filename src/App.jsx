import { createBrowserRouter, RouterProvider } from "react-router"
import Myprojects from "./pages/Myprojects"
import Home from "./pages/Home"
import { Contact } from "./pages/Contact"

import RootLayout from "./components/RootLayout"
import Myprojectsdetails from "./components/Myprojectsdetails"





export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'myprojects',
          element: <Myprojects />

        },
        {
          path: 'myprojects/:id',
          element: <Myprojectsdetails />

        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    },

  ])
  return (
    <RouterProvider router={router} />

  )


}

export default App