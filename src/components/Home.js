import React from 'react'
import styled from 'styled-components';

function Home() {
  return (
    <Container>
        Home
    </Container>
  )
}

export default Home;

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
`;