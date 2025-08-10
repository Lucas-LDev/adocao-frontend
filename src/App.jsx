import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "components/layout/DefaultLayout";
import HomePage from "pages/public/HomePage";
import HowToAdoptPage from "pages/public/HowToAdoptPage";
import AboutUsPage from "pages/public/AboutUsPage";
import AdoptPage from "pages/public/AdoptPage";
import AdoptionFormPage from "pages/public/AdoptionFormPage";


const router = createBrowserRouter([
  {
    //public routes
    element: <DefaultLayout />,
    children: [
      {path: '/', element: <HomePage />},
      {path: 'como-adotar', element: <HowToAdoptPage />},
      {path: 'sobre-nos', element: <AboutUsPage />},
      {path: 'adotar', element: <AdoptPage />},
      {path: 'formulario-adocao/:id', element: <AdoptionFormPage />},
    ]
  }


]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;