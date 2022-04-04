import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom'
import db from '../firebase'

function Detail() {

    const { id } = useParams(); 
    const [movie,setMovie] = useState();

    useEffect(()=>{
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc)=>{
                if(doc.exists){
                    setMovie(doc.data());
                }else{
                    //redirect to home
                }
            })
    }, [id])

  return (
    <Container>

        {/*
        { movies && (
        <>
            <Background>
                <img key={movie.id} src={movie.backgroundImg} />
            </Background>

            <ImageTitle>
                <img key={movie.id} src={movie.titleImg} />
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
                    <span>+</span>
                </AddButton>

                <GroupWatchButton>
                <img src='/images/group-icon.png'/>
                </GroupWatchButton>

            </Controls>
            
            <TextItems>
                    <SubTitle>
                        {movies.subTitle{}}
                    </SubTitle>

                    <Description>
                    {movies.description}
                    </Description>
            </TextItems>
            
        </>
        )

        
        }

        */}
        
        <Background>
            {id == 1 &&
            <img src='/images/slider-badag.jpg' /> }

            {id == 2 &&
            <img src='/images/slider-scale.jpg' />

            }
            
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
                <span>+</span>
            </AddButton>

            <GroupWatchButton>
            <img src='/images/group-icon.png'/>
            </GroupWatchButton>

        </Controls>
        
        <TextItems>
                <SubTitle>
                    2019  * 7m * Family, Fantasy, Kids, Animation
                </SubTitle>

                <Description>
                Badag a wonderful animated movie where Mickey, Minnie and friends hitch a ride on a musical hay wagon,
                but Peg-Leg Pete tries to one-up them with his jalopy. Featuring Walt Disney
                </Description>
        </TextItems>
    </Container>
  )
}

export default Detail;

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
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
    align-items:center;
`;

const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    padding:10px 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:54px;
    background: rgb(249,249,249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover{
        background: rgb(198, 198, 198);
        color:#000;
    }
`;

const TrailerButton = styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid #e1e1e1;
    color:#e1e1e1;
    text-transform:uppercase;
`;

const AddButton = styled.button`
    margin-right:17px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    cursor:pointer;
    border: 2px solid #fff;
    background:rgba(0,0,0,0.7);


    span{
        font-size:1.8rem;
        color:#fff;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
`;

const TextItems = styled.div`
    width:50vw;
    flex-wrap:wrap;
    display:flex;
    flex-direction:column;
`;

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:24px;
`;
const Description = styled.div`
    line-height:1.6;
    font-size:17px;
    padding-top:16px;
    color:rgb(249,249,249);
    font-weight:300;
`;