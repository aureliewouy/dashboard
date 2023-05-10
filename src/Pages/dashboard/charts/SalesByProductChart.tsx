import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export interface SalesByProductProps {
  data: {
    product: string;
    sales: number;
  }[];
}

const SalesByProduct: React.FC<SalesByProductProps> = ({ data }) => {
  const options: Highcharts.Options = {
    chart: {
      //   plotBackgroundColor: null,
      //   plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    colors: [
      "var(--blue)",
      "var(--pink)",
      "var(--yellow)",
      "var(--purple)",
      "var(--orange)",
    ],
    title: {
      text: undefined,
    },
    tooltip: {
      pointFormat: "<b>{point.y} projets</b>",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          // format: "<b>{point.name}</b>: {point.y:.2f}€",
          style: {
            color: "black",
          },
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "Categorie",
        colorByPoint: true,
        data: data.map((d) => ({ name: d.product, y: d.sales })),
        showInLegend: true,
        dataLabels: {
          enabled: false,
        },
      },
    ],
    legend: {
      labelFormatter: function (this: any) {
        console.log(this.options.y);
        return this.options.y + " " + this.name;
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SalesByProduct;
