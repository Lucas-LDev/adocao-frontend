import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import HomePage from "./public/HomePage";


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