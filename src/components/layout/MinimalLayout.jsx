import { Outlet } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

function MinimalLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="minimal"/>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default MinimalLayout;