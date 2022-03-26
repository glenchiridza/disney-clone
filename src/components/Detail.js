import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
        
        <Background>
            <img src='/images/slider-badag.jpg' />
        </Background>

        <ImageTitle>
            <img src="/images/viewers-disney.png" />
        </ImageTitle>

        <Controls>
            <PlayButton>

            </PlayButton>

            <TrailerButton>

            </TrailerButton>

            <AddButton>

            </AddButton>

            <GroupWatchButton>

            </GroupWatchButton>
        </Controls>
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
    z-index:-1;
    opacity:0.8;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }    
`;

const ImageTitle = styled.div`
    height:30vh;
    min-height:170px;
    width:30vw;
    min-width:200px;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;

const Controls = styled.div`

`;

const PlayButton = styled.div`

`;

const TrailerButton = styled.div`

`;

const AddButton = styled.div`

`;

const GroupWatchButton = styled.div`

`;
