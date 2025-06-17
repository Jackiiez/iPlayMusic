import { useState } from "react";
import { createRoot } from 'react-dom/client'
import { GloabelContext } from "./gloabelContext";
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Onboarding from "./componets/onboarding.jsx";
import Frontpage from "./componets/Frontpage.jsx";
import Explore from "./componets/explore.jsx";
import Category from "./componets/Category.jsx";
//router hvor vi putter komponenter ind og laver flere sider
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
    {
    path: "/onboarding",
    element: <Onboarding />
  },{
    path: "/:page",
    element: <Frontpage />
  },
    {
    path: "/explore",
    element: <Explore />
  },
     {
    path: "/categories",
    element: <Category />
  },
])
//vi laver et state som vi ka gemme i vores context
const MyProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  return <GloabelContext.Provider value={{ color, setColor }}>{children}</GloabelContext.Provider>;
};






createRoot(document.getElementById('root')).render(



  //vi putter vores context rundt om vores projekt
  <MyProvider>
    <RouterProvider router={router} />
  </MyProvider>



)

