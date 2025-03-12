import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextToSpeech from "../components/TextToSpeech";
import DisabledButton from "../components/DisabledButton";
import FloatingActionButton from "../components/FloatingActionButton";
// import MagnifyingGlass from "../components/MagnifyingGlass";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen navbar px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64 border-b border-[rgb(230,232,234)]">
        <Navbar />
        <Outlet />
        <TextToSpeech />
        {/* <DisabledButton /> */}
      </div>
      <FloatingActionButton />
      <Footer />
      {/* <MagnifyingGlass /> */}
    </>
  );
};

export default MainLayout;
