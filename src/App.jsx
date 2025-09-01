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
import AdminControlPanel from "pages/admin/AdminControlPanel";
import ProtectedRoute from "components/shared/ProtectedRoute";
import DeletePetPage from "pages/admin/DeletePetPage";
import CreatePetPage from "pages/admin/CreatePetPage";
import UpdatePetPage from "pages/admin/UpdatePetPage";
import PetEditorPage from "pages/admin/PetEditorPage";
import PetAvailabilityPage from "pages/admin/PetAvailabilityPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {path: '/', element: <HomePage />},
      {path: 'como-adotar', element: <HowToAdoptPage />},
      {path: 'sobre-nos', element: <AboutUsPage />},
      {path: 'adotar', element: <AdoptPage />},
      {path: 'formulario-adocao/:id', element: <AdoptionFormPage />},
      {path: 'parabens', element: <CongratulationsPage />},
      { path: "login-admin", element: <LoginAdmin /> },
    ]
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MinimalLayout />,
        children: [
          { path: "control-panel", element: <AdminControlPanel/> },
          { path: "delete-pets", element: <DeletePetPage /> },
          { path: "create-pet", element: <CreatePetPage /> },
          { path: "edit-pets", element: <UpdatePetPage /> },
          { path: "editor-pet/:petId", element: <PetEditorPage /> },
          { path: "availability", element: <PetAvailabilityPage /> },
        ],
      },
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;