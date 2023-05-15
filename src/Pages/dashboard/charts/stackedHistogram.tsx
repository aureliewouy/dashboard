import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StackedHistogramChart = () => {
  // Données du graphique
  const categories = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sept",
    "Oct",
    "Nov",
    "Déc",
  ];
  const seriesData = [
    {
      name: "NexusTech",
      data: [
        5000, 8000, 6000, 9000, 7000, 12000, 10000, 8000, 7000, 9000, 11000,
        10000,
      ],
    },
    {
      name: "SwiftShift",
      data: [
        3000, 6000, 4000, 7000, 5000, 10000, 8000, 6000, 5000, 7000, 9000, 8000,
      ],
    },
    {
      name: "Synapse",
      data: [
        4000, 7000, 5000, 8000, 6000, 11000, 9000, 7000, 6000, 8000, 10000,
        9000,
      ],
    },
  ];

  // Configuration du graphique
  const options = {
    chart: {
      type: "column",
    },
    colors: ["var(--blue)", "var(--pink)", "var(--yellow)"],
    title: {
      text: undefined,
    },
    xAxis: {
      visible: false,
      categories: categories,
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
    plotOptions: {
      area: {
        lineWidth: 0, // Retirer le bord inférieur
      },
      column: {
        stacking: "normal",
      },
    },
    credits: {
      enabled: false,
    },
    series: seriesData,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StackedHistogramChart;
