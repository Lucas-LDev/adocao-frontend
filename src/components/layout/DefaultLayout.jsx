import Header from "../shared/Header";
import Footer from "../shared/Footer";
import ScrollToTop from "./ScrollToTop";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop/>
      <Header />
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

export default DefaultLayout;