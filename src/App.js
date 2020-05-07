import React, { useState, useEffect } from 'react';
import Calculator from './components/Calculator';
import styled, { createGlobalStyle } from 'styled-components';
import {
  DEEP_PURPLE,
  GRAY,
} from './styles/mainColor';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${DEEP_PURPLE};
    /* height: 100%; */
  }
  td {
      padding: 5px;
      border: 1px solid white;
  }
`;

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 120px;
`;

const Loading = styled(Container)`
  color: white;
  margin-top: 230px;
`;



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        {
          isLoading ? (
            <Loading><h1>Loading . . .</h1></Loading>
          ) : (
              <Calculator />
            )
        }
      </Container>
    </div>
  );
}

export default App;
