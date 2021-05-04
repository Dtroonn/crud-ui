import React from "react";
import styled from "styled-components";

import { axiosInstance } from "./core";

import { recordsReducer } from "./reducers";
import {
  setRecords,
  updateRecord,
  addRecord,
  removeRecord,
} from "./actions/records";

import {
  Container,
  FlexContainer,
  Table,
  RecordCreationForm,
  ErrorPopup,
} from "./components";

const App = () => {
  const [records, dispatch] = React.useReducer(recordsReducer, []);
  const [someError, setSomeError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    (async function () {
      try {
        const response = await axiosInstance.get();
        dispatch(setRecords(response.data));
        setIsLoaded(true);
      } catch (e) {
        setIsLoaded(true);
        setSomeError(e.message);
      }
    })();
  }, []);

  const handleUpdateRecord = React.useCallback(async (id, data) => {
    try {
      await axiosInstance.post(`${id}`, { data: data });
      dispatch(updateRecord(id, data));
    } catch (e) {
      setSomeError(e.message);
      throw e;
    }
  }, []);

  const handleRemoveRecord = React.useCallback(async (id) => {
    try {
      await axiosInstance.delete(`${id}`);
      dispatch(removeRecord(id));
    } catch (e) {
      setSomeError(e.message);
      throw e;
    }
  }, []);

  const handleCreateRecord = React.useCallback(async (data) => {
    try {
      const response = await axiosInstance.put("", { data: data });
      dispatch(addRecord(response.data));
    } catch (e) {
      setSomeError(e.message);
      throw e;
    }
  }, []);

  const handleClosePopupError = () => {
    setSomeError(null);
  };

  if (!isLoaded) {
    return (
      <FlexContainer height="100vh" align="center" justify="center">
        <StyledTitle>Загрузка...</StyledTitle>
      </FlexContainer>
    );
  }

  //BACK-END РАЗРАБАТЫВАЛ НЕ Я. ЕГО ПОМЕНЯЛИ И ТАБЛИЧКА СЕЙЧАС НЕ РАБОТАЕТ
  if (true) {
    return (
      <StyledAppWrapper>
        <Container>
          <StyledAttentionBlock>
            <StyledTitle>
              Back-end разрабатывал не я. Его поменяли и табличка сейчас не
              работает. Но код можно посмотреть здесь{" "}
              <a href="https://github.com/Dtroonn/crud-ui" target="_blank">
                https://github.com/Dtroonn/crud-ui
              </a>
            </StyledTitle>
          </StyledAttentionBlock>
        </Container>
      </StyledAppWrapper>
    );
  }

  return (
    <StyledAppWrapper>
      <Container>
        <StyledTitle>
          Таблица записей {records.length > 0 ? "" : "пуста"}
        </StyledTitle>
        <Table
          onRemoveItemClick={handleRemoveRecord}
          onUpdateItemSubmit={handleUpdateRecord}
          items={records}
        />

        <RecordCreationForm
          onCreateRecordSubmit={handleCreateRecord}
          margin="20px auto 0 auto"
        />
        {someError && (
          <ErrorPopup
            onCloseClick={handleClosePopupError}
            active={someError}
            message={someError}
          />
        )}
      </Container>
    </StyledAppWrapper>
  );
};

const StyledAppWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 10px 0 20px 0;
  min-height: 100%;
`;

const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  margin: 0 0 25px 0;
  a {
    color: #f00;
  }
`;

const StyledAttentionBlock = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
