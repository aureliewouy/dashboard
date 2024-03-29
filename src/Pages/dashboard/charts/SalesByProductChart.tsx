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
      },
    },
    series: [
      {
        type: "pie",
        name: "Categorie",
        data: data.map((d) => ({ name: d.product, y: d.sales })),
        borderWidth: 3,
        borderColor: "#fff",
        showInLegend: true,

        dataLabels: {
          color: "white",
          distance: -50,
          enabled: true,
          format: "{point.percentage:.1f}%",
          style: {
            textShadow: false + " !important",
            fontSize: "0.8em",
          },
        },
      },
    ],
    legend: {
      labelFormatter: function (this: any) {
        return this.options.y + " " + this.name;
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SalesByProduct;
