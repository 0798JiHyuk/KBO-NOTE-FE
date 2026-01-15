import { Outlet } from "react-router-dom";
import "./styles/App.css";
import styled from "styled-components";

function App() {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  > * {
    width: 640px;
  }
`;

export default App;
