import React from 'react'
import styled from 'styled-components';

function Movies() {
  return (
    <Container>
        <h4>Recommended For You</h4>

        <Content>

            <Wrap>
                <img src='/images/slider-scale.jpg' />
            </Wrap>

            <Wrap>
                <img src='/images/slider-scale.jpg' />
            </Wrap>

            <Wrap>
                <img src='/images/slider-scale.jpg' />
            </Wrap>

            <Wrap>
                <img src='/images/slider-scale.jpg' />
            </Wrap>

        </Content>
    </Container>
  )
}

export default Movies;

const Container = styled.div`

`;

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`;

const Wrap = styled.div`
    border-radius:10px;
    overflow:hidden;
    border:3ox solid #e1e1e1;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;