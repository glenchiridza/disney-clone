import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <Content>
            <ContentLogoOne src="images/cta-logo-one.svg"/>
            <SignUp>Get All There</SignUp>
            <Description>
                Get Premium Access and watch all you want. well I own this clone so I get to watch all I want.
                But you my friend, you , ought to pay for premium services. I hope you not considering to pay here kkk,
                go to the official disney sight ey!
            </Description>

            <ContentLogoTwo src="images/cta-logo-two.png"/>

        </Content>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    position:relative;
    height:calc(100vh - 70px);
    display:flex;
    align-items:center;
    justify-content:center;

    &:before{
        position:absolute;
        content:"";
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
        background-image:url('/images/login-background.jpg');
        background-position:top;
        background-size:cover;
        backgrond-repeat:no-repeat;
    }
`;

const Content = styled.div`
    max-width:650px;
    width:70%;
    padding: 80px 40px;
    display:flex;
    flex-direction:column;
`;

const ContentLogoOne = styled.img`

`;
const ContentLogoTwo = styled.img`

`;

const SignUp = styled.a`
    text-transform:uppercase;
    text-decoration:none;
    width:100%;
    padding:20px;
    background-color:#0063e5;
    font-weight:bold;
    cursor:pointer;
    text-align:center;
    border-radius:4px;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:5px;
    margin-bottom:10px;

    &:hover{
        background-color:#0483ee;
    }
`;

const Description = styled.div`
    line-height:1.4;
    font-weight:400;
    color:#e1e1e1;
    letter-spacing:1.5px;
    font-size:12px;
    text-align:center;
    margin-bottom:10px;
`;