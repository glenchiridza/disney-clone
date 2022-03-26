import React from 'react';
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='images/viewers-disney.png'/>
        </Wrap>

        <Wrap>
            <img src='images/viewers-pixar.png'/>
        </Wrap>

        <Wrap>
            <img src='images/viewers-marvel.png'/>
        </Wrap>

        <Wrap>
            <img src='images/viewers-starwars.png'/>
        </Wrap>

        <Wrap>
            <img src='images/viewers-national.png'/>
        </Wrap>
        
    </Container>
  )
}

export default Viewers;

const Container = styled.div`
    margin-top:35px;
    display:grid;
    grid-gap:20px;
    padding:20px 0 25px;
    grid-template-columns: repeat(5,minmax(0, 1fr));
`;

const Wrap = styled.div`
    cursor:pointer;
    border:3px solid rgba(249,249,249,0.2);
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all .3s;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover{
        transform:scale(1.05);
        border-color:#e1e1e1;
    }
`;