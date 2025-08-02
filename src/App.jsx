import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "components/layout/DefaultLayout";
import HomePage from "pages/public/HomePage";
import HowToAdoptPage from "pages/public/HowToAdoptPage";


const router = createBrowserRouter([
  {
    //public routes
    element: <DefaultLayout />,
    children: [
      {path: '/', element: <HomePage />},
      {path: 'como-adotar', element: <HowToAdoptPage />},
    ]
  }


]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;