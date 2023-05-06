import Card from "../../globalComponents/cardsBusiness";
import { salesByProductData, salesData } from "../../utils/fakeData/salesData";
import { formatNumber } from "../../utils/formatNumber";
import SalesByProduct from "./charts/SalesByProductChart";
import SalesDashboard from "./charts/SalesDashboard";
import DashboardHeader from "./components/dashboardHeader";
import {ReactComponent as Work} from "../../medias/icons/work.svg";
import CardChart from "../../globalComponents/cardChart";

const DashboardComponent = (): JSX.Element => {
  return (
<div style={{backgroundColor: "cornsilk"}}>
  <div style={{padding:"2% 6%"}}>

  <DashboardHeader/>
 
  <div style={{display:"flex", justifyContent:"space-between", borderRadius:"25px"}}>
  <Card
        price={formatNumber(22880.50, "$")}
        subtitle="Won from 18 deals"
        icon={<Work/>}
        percent={67}
      />
  <Card
        price={formatNumber(1096.30, "$")}
        subtitle="Won from 18 deals"
        icon={<Work/>}
        percent={18}
      />
  <Card
        price={formatNumber(33, "%")}
        subtitle="Lead conversation"
        icon={<Work/>}
        percent={78}
      />
  <Card
        price={formatNumber(730)}
        subtitle="Campagain sent"
        icon={<Work/>} 
        percent={80}
      />
    </div>
  <div style={{display:"flex", justifyContent:"space-between", marginTop:"2%", borderRadius:"25px"}}>
    <CardChart
    title="Total Email Sent"
    chart={ <SalesByProduct data={salesByProductData.data} />}
    />
    <CardChart
    title="Icome Amounts"
    chart={<SalesDashboard salesData={salesData.salesData}/>}
    />
    <CardChart
    title="Revenue"
    chart={ <SalesByProduct data={salesByProductData.data} />}
    />
  {/* <div style={{width:"55%"}}>
  <SalesDashboard salesData={salesData.salesData}/>
  </div>
  <div style={{width:"45%"}}>
  <SalesByProduct data={salesByProductData.data} />
  </div> */}
  </div>
  </div>
</div>

  );
};

export default DashboardComponent;
