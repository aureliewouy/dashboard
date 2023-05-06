import { format } from 'date-fns';
import { fr } from 'date-fns/esm/locale'

const DashboardHeader = (): JSX.Element => {
  const today = new Date();
  const formattedDate = format(today, "EEEE d MMMM yyyy", { locale: fr });  
  const month= format(today,"MMM", { locale: fr })
  return (
<div style={{margin:"60px"}}>
   <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px"}}>
    <div>
    <h1>Hi John Doe</h1> 

    <p>{formattedDate}</p>
    </div>
    <div>
      <button>Download</button>
    </div>
   </div>

</div>

  );
};

export default DashboardHeader;
