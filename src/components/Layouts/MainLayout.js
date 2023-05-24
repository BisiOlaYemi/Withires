import Footer from "./footer";
import Navbar from "./navbar";


const MainLayout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  };
  
  export default MainLayout;
  