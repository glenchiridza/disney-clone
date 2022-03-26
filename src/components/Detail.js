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
                <img src='/images/play-icon-black.png'/>
                <span>Play</span>
            </PlayButton>

            <TrailerButton>
                <img src='/images/play-icon-white.png'/>
                <span>Trailer</span>
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
    display:flex;
    
`;

const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    display:flex;
    align-items:center;
    height:54px;
`;

const TrailerButton = styled.button`

`;

const AddButton = styled.button`

`;

const GroupWatchButton = styled.button`

`;
