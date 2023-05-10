import React from "react";
import styled from "styled-components";
import { formatNumber } from "../../../utils/formatNumber";

interface TableData {
  no: number;
  project: string;
  revenues: number;
  leads: number;
  deals: number;
}
const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTableHeader = styled.th`
  background-color: var(--blue);
  color: white;
  font-weight: bold;
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
`;

const StyledTableCell = styled.td`
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
`;

const BodyTableRow = styled.tr`
  &:nth-child(even) {
    background: #ccc;
  }
`;
const tableData: TableData[] = [
  { no: 1, project: "Website Redesign", revenues: 1000, leads: 20, deals: 5 },
  { no: 2, project: "Marketing Plan", revenues: 2000, leads: 30, deals: 10 },
  { no: 3, project: "Mobile App ", revenues: 3000, leads: 40, deals: 15 },
  { no: 4, project: "E-commerce Site", revenues: 4000, leads: 50, deals: 20 },
  { no: 5, project: "Brand Identity", revenues: 56400, leads: 30, deals: 10 },
];

const ProjectTable: React.FC = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableHeader>No</StyledTableHeader>
          <StyledTableHeader>Projects</StyledTableHeader>
          <StyledTableHeader>Revenues</StyledTableHeader>
          <StyledTableHeader>Leads</StyledTableHeader>
          <StyledTableHeader>Deals</StyledTableHeader>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <BodyTableRow key={data.no}>
            <StyledTableCell>{data.no}</StyledTableCell>
            <StyledTableCell>{data.project}</StyledTableCell>
            <StyledTableCell>
              {formatNumber(data.revenues, "$")}
            </StyledTableCell>
            <StyledTableCell>{data.leads}</StyledTableCell>
            <StyledTableCell>{data.deals}</StyledTableCell>
          </BodyTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default ProjectTable;
