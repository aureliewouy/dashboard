import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

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
      type: 'pie'
    },
    title: {
      text:undefined
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y:.2f}€</b>'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y:.2f}€',
          style: {
            color:'black'
          }
        }
      }
    },
    series: [{
        type:"pie",
        innerSize: "50%",
      name: 'Ventes',
      colorByPoint: true,
      data: data.map(d => ({ name: d.product, y: d.sales }))
    }]
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default SalesByProduct;
