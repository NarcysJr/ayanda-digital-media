import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

export default function LayoutGeral() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="flex flex-col max-h-screen">
      <Navbar />
      <main className=" "> 
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
