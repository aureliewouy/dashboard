import styled from "styled-components";
import { ReactComponent as Download } from "../../../medias/icons/download.svg";
import { ReactComponent as Add } from "../../../medias/icons/add_circle.svg";

const Welcome = styled.p`
  margin-top: -15px;
  color: darkgrey;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 30px;
`;
const Buttons = styled.div`
  cursor: pointer;
  padding: 0 10px;
  border: 1px solid rgba(221, 213, 213, 0.9);
  border-radius: 9px;
  display: flex;
  align-items: center;
  & > svg {
    width: 25px;
    height: 25px;
  }
  & > p {
    font-weight: 500;
    font-size: 0.85em;
    margin: 10px;
  }
`;
const DownloadBtn = styled(Buttons)`
  background-color: white;
  margin-right: 10px;
`;
const AddBtn = styled(Buttons)`
  color: white;
  border: none;
  background-color: var(--purple);
  & > svg {
    fill: white;
  }
`;
const DoubleBtn = styled.div`
  display: flex;
`;
interface ClickProps {
  handlePrint: any;
}

const DashboardHeader: React.FC<ClickProps> = ({ handlePrint }) => {
  return (
    <div>
      <HeaderWrapper>
        <div>
          <h1>Hi John Doe</h1>
          <Welcome>Welcome back to CRM platform</Welcome>
        </div>
        <DoubleBtn>
          <DownloadBtn onClick={handlePrint}>
            <Download />
            <p>Download</p>
          </DownloadBtn>
          <AddBtn>
            <Add />
            <p>Add dashlet</p>
          </AddBtn>
        </DoubleBtn>
      </HeaderWrapper>
    </div>
  );
};

export default DashboardHeader;
