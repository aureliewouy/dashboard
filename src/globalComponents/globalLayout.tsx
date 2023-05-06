// import {GlobalProvider} from "hooks/useGlobalContext";
import Sidebar from "./sideBar";
import NavBar from "./menu";

interface LayoutProps {
    children: React.ReactNode;
  }

const GlobalLayout = ({ children }: LayoutProps)  => {
  return (
    <div>
      {/* <GlobalProvider>*/}
        <NavBar/>
        <Sidebar active="dashboard"/>
        <main style={{width:"84%", marginLeft:"auto"}}>
        { children }
        </main>
    </div>
  );
};

export default GlobalLayout;
