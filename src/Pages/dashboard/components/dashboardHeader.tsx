import { format } from 'date-fns';
import { fr } from 'date-fns/esm/locale'
import working from '../../../medias/working.svg';

const DashboardHeader = (): JSX.Element => {
  const today = new Date();
  const formattedDate = format(today, "EEEE d MMMM yyyy", { locale: fr });  
  const month= format(today,"MMM", { locale: fr })
  return (
<div>
   <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px"}}>
    <div>
    <h1>Dashboard</h1> 
    <p>{formattedDate}</p>
    </div>
    <div>
      <button>{month}</button>
    </div>
   </div>
   <div style={{backgroundColor:"cornsilk", margin:"1% 8%", padding:"30px", borderRadius:"25px",position:"relative" }}>
   <img src={working} alt="Working woman multi-task" style={{width:"310px", position:"absolute", top:"-50px", left:"2px" }}/>
    <div style={{paddingLeft:"45%", margin:"6% 0"}}>
    <h2><span>Hello, Aurélie `name`</span></h2>
    <p>You have 2 unfinished job. </p>
    <p>Good job ! For this week, you already in progress `70%`</p>
    </div>
   </div>
</div>

  );
};

export default DashboardHeader;
