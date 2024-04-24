import { router } from "./routes";
import { RouterProvider } from 'react-router-dom'

import './global.css'
import { HelmetProvider, Helmet  } from "react-helmet-async";

export function App() {
 

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | food.shop"/>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}