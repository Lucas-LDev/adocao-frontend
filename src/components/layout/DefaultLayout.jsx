import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="min-h-56">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;