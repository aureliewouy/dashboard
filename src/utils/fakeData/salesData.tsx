import { SalesByProductProps } from "../../Pages/dashboard/charts/SalesByProductChart";
import { tableData } from "../../Pages/dashboard/components/projectsTable";
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
export const TableData: tableData[] = [
  {
    name: "Lumina",
    category: "Website Redesign",
    revenues: 1000,
    leads: 20,
    deals: 5,
  },
  {
    name: "BlueWave",
    category: "Marketing Plan",
    revenues: 2000,
    leads: 30,
    deals: 10,
  },
  {
    name: "Synapse",
    category: "Mobile App ",
    revenues: 3000,
    leads: 40,
    deals: 15,
  },
  {
    name: "SwiftShift",
    category: "E-commerce",
    revenues: 4000,
    leads: 50,
    deals: 20,
  },
  {
    name: "NexusTech",
    category: "Mobile App",
    revenues: 56400,
    leads: 30,
    deals: 10,
  },
];

export const TasksData: Task[] = [
  {
    id: Math.random(),
    description: "Implement a mobile app version of the CRM platform",
    done: false,
  },
  {
    id: Math.random(),
    description:
      "Implement a task management feature with reminders and notifications.",
    done: true,
  },
  {
    id: Math.random(),
    description: "Implement user authentication and authorization system.",
    done: false,
  },
  {
    id: Math.random(),
    description:
      "Improve the user interface and user experience of the CRM platform",
    done: false,
  },
  {
    id: Math.random(),
    description: "Design and develop a customizable dashboard for users.",
    done: false,
  },
];
