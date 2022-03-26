import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
        
        <Background>
            <img src='/images/slider-badag.jpg' />
        </Background>

    </Container>
  )
}

export default Detail;

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 (3.5vw + 5px);
    position:relative;

`;

const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    
`;