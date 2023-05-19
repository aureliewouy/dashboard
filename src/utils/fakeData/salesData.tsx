import { SalesByProductProps } from "../../Pages/dashboard/charts/SalesByProductChart";
import { Task } from "../../Pages/dashboard/components/tasks";

export const salesByProductData: SalesByProductProps = {
  data: [
    { product: "Mobile Apps", sales: 408 },
    { product: "Software", sales: 56 },
    { product: "Consulting", sales: 212 },
    { product: "Web design", sales: 333 },
  ],
};

// Générer des données de revenu quotidien aléatoire croissant pour une année
export const generateRandomData = (year: number): number[] => {
  const data: number[] = [];
  const daysInYear = 365;

  let previousIncome = Math.floor(Math.random() * 10000); // Revenu initial aléatoire entre 0 et 1000
  data.push(previousIncome);

  for (let day = 1; day <= daysInYear; day++) {
    const maxIncrement = Math.floor(Math.random() * 100); // Incrément maximum aléatoire entre 0 et 100
    const increment = Math.floor(Math.random() * maxIncrement);
    const currentIncome = previousIncome + increment;
    data.push(currentIncome);
    previousIncome = currentIncome;
  }

  return data;
};
export const TasksData: Task[] = [
  {
    id: Math.random(),
    description: "Send email to Robert",
    done: false,
  },
  {
    id: Math.random(),
    description: "User Testing",
    done: true,
  },
  {
    id: Math.random(),
    description: "Create V2",
    done: false,
  },
  {
    id: Math.random(),
    description: "Start a new campaign",
    done: false,
  },
];
