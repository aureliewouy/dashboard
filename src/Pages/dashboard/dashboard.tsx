import Sidebar from "../../globalComponents/sideBar";
import DashboardComponent from "./dashboardComponents";
import ProfileSideBar from "./profilBar";
import profilePic from '../../medias/aurelie.jpeg';

const Dashboard = (): JSX.Element => {

  return (
<div style={{display:"flex",justifyContent: "center"}}>
    <Sidebar active="dashboard"/>   
    <DashboardComponent/> 
    <ProfileSideBar name="Aurélie" email="aurelie.cedia@gmail.com" avatarUrl={profilePic}/>
</div>

  );
};

export default Dashboard;
