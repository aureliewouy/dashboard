import DashboardHeader from "./components/dashboardHeader";

const DashboardComponent = (): JSX.Element => {
  return (
<div style={{flexGrow:"1"}}>
  <div style={{backgroundColor:"aliceblue", margin:"2%", borderRadius:"25px"}}>

  <DashboardHeader/>
  </div>

</div>

  );
};

export default DashboardComponent;
