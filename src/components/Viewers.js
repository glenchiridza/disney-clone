import React from 'react';
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='images/viewers-disney.png'/>
        </Wrap>

        <Wrap>
            <img src='images/viewers-disney.png'/>
        </Wrap>

        <Wrap>
            <img src='images/viewers-disney.png'/>
        </Wrap>

        <Wrap>
            <img src='images/viewers-disney.png'/>
        </Wrap>

        <Wrap>
            <img src='images/viewers-disney.png'/>
        </Wrap>
        
    </Container>
  )
}

export default Viewers;

const Container = styled.div`
    margin-top:35px;
    display:grid;
    grid-gap:20px;
    grid-template-columns: repeat(5,minmax(0, 1fr));
`;

const Wrap = styled.div`
    border:3px solid rgba(249,249,249,0.2);
    border-radius:10px;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;