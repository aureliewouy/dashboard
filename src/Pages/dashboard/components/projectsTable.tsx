import React from "react";
import styled from "styled-components";
import { formatNumber } from "../../../utils/formatNumber";
import { TableData } from "../../../utils/fakeData/salesData";

export interface tableData {
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

const ProjectTable: React.FC = () => {
  const sortedTable = [...TableData].sort((a, b) => b.revenues - a.revenues);
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
          {sortedTable.map((data, index) => (
            <BodyTableRow key={index}>
              <StyledTableCell>{index + 1}.</StyledTableCell>
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
