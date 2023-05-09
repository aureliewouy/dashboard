import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export interface SalesDashboardProps {
  salesData: {
    month: string;
    sales: number;
  }[];
}

const SalesDashboard: React.FC<SalesDashboardProps> = ({ salesData }) => {
  const options: Highcharts.Options = {
    title: {
      text: undefined,
    },
    xAxis: {
      categories: salesData.map((data) => data.month),
    },
    yAxis: {
      title: {
        text: "Chiffre d'affaires (€)",
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: "line",
        name: "Chiffre d'affaires",
        data: salesData.map((data) => data.sales),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SalesDashboard;
