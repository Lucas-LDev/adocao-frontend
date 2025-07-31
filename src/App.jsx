import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./assets/components/layout/DefaultLayout";
import HomePage from "./assets/pages/public/HomePage";


const router = createBrowserRouter([
  {
    //public routes
    element: <DefaultLayout />,
    children: [
      {path: '', element: <HomePage />}
    ]
  }


]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;