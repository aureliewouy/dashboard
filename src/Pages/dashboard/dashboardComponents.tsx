import CardBusiness from "../../globalComponents/cardsBusiness";
import { salesByProductData } from "../../utils/fakeData/salesData";
import { formatNumber } from "../../utils/formatNumber";
import SalesByProduct from "./charts/SalesByProductChart";
import SalesDashboard from "./charts/SalesDashboard";
import DashboardHeader from "./components/dashboardHeader";
import { ReactComponent as Work } from "../../medias/icons/work.svg";
import { ReactComponent as Send } from "../../medias/icons/send.svg";
import { ReactComponent as Mail } from "../../medias/icons/mail.svg";
import { ReactComponent as Wallet } from "../../medias/icons/wallet.svg";
import CardBase from "../../globalComponents/cardBase";
import TaskList from "./components/tasks";
import ProjectTable from "./components/projectsTable";
import StackedHistogramChart from "./charts/stackedHistogram";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { DashboardToPrint } from "./dashboardToPrint";

const DashboardComponent = (): JSX.Element => {
  const componentRef = useRef(null);
  const printPage = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "test",
    removeAfterPrint: true,
  });
  const handlePrint = () => {
    printPage();
  };

  return (
    <div style={{ backgroundColor: "var(--background)" }}>
      <div style={{ padding: "2% 4%" }}>
        <DashboardHeader handlePrint={handlePrint} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: " 10px",
          }}
        >
          <CardBusiness
            price={formatNumber(22880.5, "$")}
            subtitle="Won from 18 deals"
            icon={<Work />}
            percent={67}
            color={"var(--blue)"}
          />
          <CardBusiness
            price={formatNumber(1096.3, "$")}
            subtitle="Daily average income"
            icon={<Wallet />}
            percent={18}
            color={"var(--pink)"}
          />
          <CardBusiness
            price={formatNumber(33, "%")}
            subtitle="Lead conversation"
            icon={<Mail />}
            color={"var(--purple)"}
            percent={78}
          />
          <CardBusiness
            price={formatNumber(730)}
            subtitle="Campagain sent"
            color={"var(--yellow)"}
            icon={<Send />}
            percent={80}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            marginTop: "1%",
            gap: " 10px",
          }}
        >
          <CardBase
            title="Projects Categories"
            grow={0.5}
            widget={<SalesByProduct data={salesByProductData.data} />}
          />
          <CardBase
            title="Top 3 projects revenues"
            grow={0.5}
            widget={<StackedHistogramChart />}
          />
          <CardBase
            title="Income Amounts"
            grow={2}
            widget={<SalesDashboard />}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1%",
            flexWrap: "wrap",
            gap: " 10px",
          }}
        >
          <CardBase grow={2} title="Top projects" widget={<ProjectTable />} />
          <CardBase
            overflow="auto"
            grow={0}
            title="Tasks"
            widget={<TaskList />}
          />
        </div>
      </div>
      <div style={{ display: "none" }}>
        <DashboardToPrint ref={componentRef} />
      </div>
    </div>
  );
};

export default DashboardComponent;
