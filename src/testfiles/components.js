import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {CgMenuRightAlt} from 'react-icons/cg';
import img from '../images/yang_half.png';
import img1 from '../images/yin_half.png';
import img2 from '../images/samuria.jpg';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        color: ${props => (props.Color ? 'red' : 'green')};
    }
`;




export const Containered = styled.div`
    padding: 2%;
    background: #111;
    positon:absolute;
    bottom:0;
    right:0;
    top: 0;
    left: 0;
    min-height: 100%;
    height:100vh;
    max-height: 100%;
    width:100%;
`;

export const InnerDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 5%;
    margin: 0;
    //border: 1px solid #BD1F2D;
    background: #111;
    //background-image: ${({display}) => ('url('+display+')')};
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    //transition: ${({transition}) => (transition)};
    //opacity: ${({opac}) => (opac)};

    /*&:hover {
        background-image: url(${img1})
    }*/
  

`;

export const BgFade = styled.div`
    padding: 0;
    margin: 0;
    //border: 3px solid red;
    background: #BD1F2D;
    position: absolute;
    width:100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    visibility: ${({openVis}) => (openVis)};
    transition: ${({transition}) => (transition)};
    opacity: ${({opac}) => (opac)};
`;


export const TestDiv = styled.div`
    width: ${({width}) => (width)};
    height: ${({height}) => (height)};
    //background: ${({ isColor }) => (isColor ? 'green' : 'red')}; 
    //background: ${({isColor}) => (isColor)};
    background-image: url(${img});
    //display:flex;
    color: red;
    transform: ${({ isOpen }) => ( 'rotate('+isOpen+'deg)')};
    -webkit-transition: 1s ease-in-out;
    -moz-transition: 1s ease-in-out;
    -o-transition: 1s ease-in-out;
    transition: 1s ease-in-out;
    position: absolute;
    z-index: 999;
    left: ${({left}) => (left)};
    right: 0;
    top: ${({top}) => (top)};
    bottom: 0;
    margin: auto;
    //border:1px solid red;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    text-align: center;
    //visibility: ${({openVis}) => (openVis)};
    //transition: ${({transition}) => (transition)};
    //opacity: ${({opac}) => (opac)};
`;

export const TestDiv1 = styled.div`
    width: ${({width}) => (width)};
    height: ${({height}) => (height)};
    //background: ${({ isColor }) => (isColor ? 'green' : 'red')}; 
    //background: ${({isColor}) => (isColor)};
    background-image: url(${img1});
    //display:flex;
    color: red;
    transform: ${({ isOpen1 }) => ( 'rotate('+isOpen1+'deg)')};
    -webkit-transition: 1s ease-in-out;
    -moz-transition: 1s ease-in-out;
    -o-transition: 1s ease-in-out;
    transition: 1s ease-in-out;
    position: absolute;
    z-index: 999;
    left: ${({left1}) => (left1)};
    right: 0;
    top: ${({top}) => (top)};
    //top: -73%;
    bottom: 0;
    margin: auto;
    //border:1px solid red;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    text-align: center;
    //visibility: ${({openVis}) => (openVis)};
    //transition: ${({transition}) => (transition)};
    //opacity: ${({opac}) => (opac)};
`;

/*export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;*/

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const MenuIcon = styled(CgMenuRightAlt)`
    color: #111;
`;

export const Icon = styled.button`
    position: absolute;
    top: ${props => (props.top)};
    right: ${props => (props.right)};
    bottom: ${props => (props.bottom)};
    left: ${props => (props.left)};
    width: ${props => (props.width)};
    height: ${props => (props.height)};
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    padding: 1%;
    border: 1px solid #696969;
    visibility: ${({openVis}) => (openVis)};
`;

export const MenuButton = styled.button`
    position: relative;
    top: ${props => (props.top)};
    right: ${props => (props.right)};
    bottom: ${props => (props.bottom)};
    left: ${props => (props.left)};
    width: ${props => (props.width)};
    height: ${props => (props.height)};
    background: transparent;
    border: 0px solid #696969;
    padding: 1%;
    color: white;
    z-index: 1;
    font-size: 2rem;
`;

export const TextDiv = styled.div`
    position: relative;
    top: ${props => (props.top)};
    right: ${props => (props.right)};
    bottom: ${props => (props.bottom)};
    left: ${props => (props.left)};
    width: ${props => (props.width)};
    height: ${props => (props.height)};
    background: transparent;
    padding: 1%;
    border: 0px solid #696969;
    color: ${({textColor}) => (textColor)};
    z-index: 999;
    font-size: 2.3rem;
    visibility: ${({display}) => (display)};
    -webkit-transition: 3s ease-in-out;
    -moz-transition: 3s ease-in-out;
    -o-transition: 3s ease-in-out;
    transition: 3s ease-in-out;
`;

export const TextSmallDiv = styled.div`
    position: absolute;
    top: ${props => (props.top)};
    right: ${props => (props.right)};
    bottom: ${props => (props.bottom)};
    left: ${props => (props.left)};
    width: ${props => (props.width)};
    height: ${props => (props.height)};
    background: transparent;
    padding: 1%;
    border: 0px solid #696969;
    color: ${({textColor}) => (textColor)};
    z-index: 999;
    font-size: 1.3rem;
    visibility: ${({openVis}) => (openVis)};
    opacity: ${({opac}) => (opac)};
    -webkit-transition: 3s ease-in-out;
    -moz-transition: 3s ease-in-out;
    -o-transition: 3s ease-in-out;
    transition: 3s ease-in-out;
`;
