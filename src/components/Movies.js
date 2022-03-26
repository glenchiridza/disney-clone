import React from 'react';
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
                <img src='/images/slider-badag.jpg' />
            </Wrap>


            <Wrap>
                <img src='/images/slider-scale.jpg' />
            </Wrap>

            <Wrap>
                <img src='/images/slider-badag.jpg' />
            </Wrap>


        </Content>
    </Container>
  )
}

export default Movies;

const Container = styled.div`
    margin-bottom:20px;
`;

const Content = styled.div`
    overflow:hidden;
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`;

const Wrap = styled.div`
    min-height:150px;
    max-height:150px;
    border-radius:10px;
    overflow:hidden;
    border:3ox solid #e1e1e1;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 0.3s;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover{
        transform:scale(1.05);
        border:#e1e1e1;
    }
`;