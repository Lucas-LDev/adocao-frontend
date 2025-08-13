import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "components/layout/DefaultLayout";
import MinimalLayout from "components/layout/MinimalLayout";
import HomePage from "pages/public/HomePage";
import HowToAdoptPage from "pages/public/HowToAdoptPage";
import AboutUsPage from "pages/public/AboutUsPage";
import AdoptPage from "pages/public/AdoptPage";
import AdoptionFormPage from "pages/public/AdoptionFormPage";
import CongratulationsPage from "pages/public/CongratulationsPage";
import LoginAdmin from "pages/admin/LoginAdminPage";


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
      {path: 'parabens', element: <CongratulationsPage />},
    ]
  },
  {
    //public routes with minimal layout 
    element: <MinimalLayout />,
    children: [
      { path: "login-admin", element: <LoginAdmin /> },
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;