import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { generateRandomData } from "../../../utils/fakeData/salesData";
import { getDateInYear } from "../../../utils/formatNumber";

const year = new Date().getFullYear();
const incomeData = generateRandomData(year);

const SalesDashboard: React.FC = () => {
  const options: Highcharts.Options = {
    title: {
      text: `$${incomeData[incomeData.length - 1]}`,
      align: "left",
    },
    subtitle: {
      text: "Won from 262 Deals",
      align: "left",
    },
    xAxis: {
      categories: incomeData.map((data, index) => getDateInYear(index)),
      visible: false,
      tickWidth: 0,
    },
    yAxis: {
      gridLineColor: "transparent",
      title: {
        text: undefined,
      },
      labels: {
        enabled: false,
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "<b>${point.y}</b>",
    },
    plotOptions: {
      area: {
        lineWidth: 2,
        lineColor: "var(--purple)",
      },
    },
    series: [
      {
        type: "area",
        name: "Chiffre d'affaires",
        data: incomeData.map((data) => data),
        color: "var(--purpleOpacity)",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SalesDashboard;
