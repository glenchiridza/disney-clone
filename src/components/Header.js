import React from 'react'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import { selectUserName,selectUserPhoto, setUserLogin,setSignOut } from '../features/user/userSlice';
import {useDispatch,useSelector} from 'react-redux';
import {auth,provider} from "../firebase"

function Header() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const signIn = () => {  
        auth.signInWithPopup(provider)
        .then((res)=>{
            let user = res.user;
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            }))
        })
    }

    const signOut = () =>{
        auth.signOut()
        .then((res)=>{

            dispatch(setSignOut({

            }))
            history.push("/login")
        })
    }

  return (
    <Nav>
        <Logo src="images/logo.svg"/>
        {
            !userName ? (
                <LoginContain>
                    <Login onClick={signIn}>Login</Login>
                </LoginContain>
            ) :

            <>
        
            <NavMenu>
                <a>
                    <img src="images/home-icon.svg"/>
                    <span>HOME</span>
                </a>

                <a>
                    <img src="images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>

                <a>
                    <img src="images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>

                <a>
                    <img src="images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>

                <a>
                    <img src="images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>

                <a>
                    <img src="images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>

            </NavMenu>

            <UserImg onClick={signOut} src="images/glen.jpg" />
         </>
        }

    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
    height:70px;
    background-color:#090b13;
    display:flex;
    align-items:center;
    padding: 0 30px;
    overflow-x:scroll;
`;

const Logo = styled.img`
    width:80px;
`;

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:20px;
    align-items:center;
    a {
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        img{
            height:20px;
        }
        span {
            font-size:.7rem;
            letter-spacing:1.42px;
            position:relative;

            &:after {
                content:"";
                height:2px;
                background:#fff;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin: left center;
                transition:all 0.2s;
                transform:scaleX(0);
            }
        }
        &:hover{
            span:after{
                opacity:1;
                transform:scaleX(1);
            }
        }
    }
`;

const UserImg = styled.img`
    width:40px;
    height:40px;
    border-radius:55%;
    
    cursor:pointer;
`;

const Login = styled.div`
    border:1px solid #e1e1e1;
    color:#ffffff;
    padding:5px 15px;
    border-radius:3px;
    letter-spacing:1.2px;
    text-transform:uppercase;
    transition:all .3s;
    cursor:pointer;

    &:hover{
        background:#fff;
        color:#000;
    }
`;

const LoginContain = styled.div`
    display:flex;
    flex:1;
    justify-content:end;
`;