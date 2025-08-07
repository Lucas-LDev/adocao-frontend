import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "components/layout/DefaultLayout";
import HomePage from "pages/public/HomePage";
import HowToAdoptPage from "pages/public/HowToAdoptPage";
import AboutUsPage from "pages/public/AboutUsPage";
import AdoptPage from "pages/public/AdoptPage";


const router = createBrowserRouter([
  {
    //public routes
    element: <DefaultLayout />,
    children: [
      {path: '/', element: <HomePage />},
      {path: 'como-adotar', element: <HowToAdoptPage />},
      {path: 'sobre-nos', element: <AboutUsPage />},
      {path: 'adotar', element: <AdoptPage />},
    ]
  }


]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;