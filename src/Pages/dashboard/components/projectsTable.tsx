import React from "react";
import styled from "styled-components";
import { formatNumber } from "../../../utils/formatNumber";

interface TableData {
  no: number;
  category: string;
  name: string;
  revenues: number;
  leads: number;
  deals: number;
}
const StyledTable = styled.table`
  margin-top: 25px;
  border-collapse: collapse;
  width: 100%;
`;

const StyledTableHeader = styled.th`
  font-weight: bold;
  text-align: left;
  color: darkGrey;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const StyledTableCell = styled.td`
  text-align: left;
  padding: 20px 8px;
`;

const BodyTableRow = styled.tr`
  &:nth-child(odd) {
    background: var(--purpleOpacity);
  }
`;
const tableData: TableData[] = [
  {
    no: 1,
    name: "Lumina",
    category: "Website Redesign",
    revenues: 1000,
    leads: 20,
    deals: 5,
  },
  {
    no: 2,
    name: "BlueWave",
    category: "Marketing Plan",
    revenues: 2000,
    leads: 30,
    deals: 10,
  },
  {
    no: 3,
    name: "Synapse",
    category: "Mobile App ",
    revenues: 3000,
    leads: 40,
    deals: 15,
  },
  {
    no: 4,
    name: "SwiftShift",
    category: "E-commerce",
    revenues: 4000,
    leads: 50,
    deals: 20,
  },
  {
    no: 5,
    name: "NexusTech",
    category: "Mobile App",
    revenues: 56400,
    leads: 30,
    deals: 10,
  },
];

const ProjectTable: React.FC = () => {
  return (
    <div>
      <p style={{ marginTop: "-5px", color: "darkgrey", marginLeft: "3px" }}>
        Last 2 Weeks
      </p>

      <StyledTable>
        <thead>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <StyledTableHeader>No</StyledTableHeader>
            <StyledTableHeader>Name</StyledTableHeader>
            <StyledTableHeader>Category</StyledTableHeader>
            <StyledTableHeader>Revenues</StyledTableHeader>
            <StyledTableHeader>Leads</StyledTableHeader>
            <StyledTableHeader>Deals</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <BodyTableRow key={data.no}>
              <StyledTableCell>{data.no}</StyledTableCell>
              <StyledTableCell>{data.name}</StyledTableCell>
              <StyledTableCell>{data.category}</StyledTableCell>
              <StyledTableCell>
                {formatNumber(data.revenues, "$")}
              </StyledTableCell>
              <StyledTableCell>{data.leads}</StyledTableCell>
              <StyledTableCell>{data.deals}</StyledTableCell>
            </BodyTableRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default ProjectTable;
