import { SalesByProductProps } from "../../Pages/dashboard/charts/SalesByProductChart";
import { SalesDashboardProps } from "../../Pages/dashboard/charts/SalesDashboard";

export const salesData: SalesDashboardProps = {
  salesData: [
    //   { month: "janvier 2022", sales: 100000 },
    //   { month: "février 2022", sales: 120000 },
    //   { month: "mars 2022", sales: 140000 },
    //   { month: "avril 2022", sales: 160000 },
    //   { month: "mai 2022", sales: 180000 },
    //   { month: "juin 2022", sales: 200000 },
    //   { month: "juillet 2022", sales: 220000 },
    //   { month: "août 2022", sales: 240000 },
    //   { month: "septembre 2022", sales: 260000 },
    //   { month: "octobre 2022", sales: 280000 },
    { month: "novembre 2022", sales: 300000 },
    { month: "décembre 2022", sales: 320000 },
    { month: "janvier 2023", sales: 175000 },
    { month: "février 2023", sales: 200000 },
    { month: "mars 2023", sales: 225000 },
    { month: "avril 2023", sales: 250000 },
  ],
};

export const salesByProductData: SalesByProductProps = {
  data: [
    { product: "Mobile Apps", sales: 408 },
    { product: "Software", sales: 56 },
    { product: "Consulting", sales: 212 },
    { product: "Web design", sales: 333 },
  ],
};
