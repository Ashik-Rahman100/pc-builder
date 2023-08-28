import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="h-[100vh]">
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
