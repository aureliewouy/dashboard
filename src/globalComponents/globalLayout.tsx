// import {GlobalProvider} from "hooks/useGlobalContext";
import Sidebar from "./sideBar";
import NavBar from "./menu";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* <GlobalProvider>*/}
      <Sidebar active="dashboard" />
      <main style={{ width: "85%", marginLeft: "auto" }}>
        <NavBar />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default GlobalLayout;
