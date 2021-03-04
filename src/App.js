import React from "react";
import styled from "styled-components";
import axios from "axios";

import { Container, Table } from "./components";

const StyledAppWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const App = () => {
  const [records, setRecords] = React.useState([]);

  React.useEffect(() => {
    (async function () {
      const response = await axios.get(
        "http://178.128.196.163:3000/api/records"
      );
      setRecords(response.data);
    })();
  }, []);

  return (
    <StyledAppWrapper>
      <Container>
        <Table items={records} />
      </Container>
    </StyledAppWrapper>
  );
};

export default App;
