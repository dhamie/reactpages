import React from 'react';
import {TestDiv, Icon, CloseIcon, InnerDiv, Containered, TextDiv, TestDiv1, MenuIcon, MenuButton, BgFade, TextSmallDiv} from './components'; 
import { useState, useEffect } from 'react'
import img2 from '../images/samuria.jpg';
import useEventListener from '@use-it/event-listener'
//import {Container, Row, Col} from 'react-bootstrap';


const Nnoxo = () => {

        
const ESCAPE_KEYS = ['27', 'Escape'];
const W = ['87', 'w'];
const A = ['65', 'a'];
const S = ['83', 's'];
const D = ['68', 'd'];



    let [isOpen, setIsOpen] = useState(90);
    let [tagName, setTagName] = useState('ENTER D WU');
    let [isOpen1, setIsOpen1] = useState(180);
    let [isColor, setColor] = useState('red');
    let [display, setDisplay] = useState('');
    let [textColor, setTextCol] = useState('white');
    let [transition, setTran] = useState('opacity 2s linear');
    let [opac, setOpac] = useState('1');
    let [openVis, setVis] = useState('visible');
    let [width, setWidth] = useState('350px');
    let [height, setHeight] = useState('400px');
    let [left, setLeft] = useState('-5%');
    let [left1, setLeft1] = useState('5%');
    let [top, setTop] = useState('0');  
    const icon0 = () => { setIsOpen1(isOpen1 = isOpen1 + 90); setColor(isColor = 'red'); }
    const icon90 = () => { setIsOpen(isOpen + 90); setColor(isColor = 'green');}
    const icon180 = () => { setIsOpen1(isOpen1 = isOpen1 - 90); setColor(isColor = 'purple'); }
    const icon270 = () => { setIsOpen(isOpen - 90); setColor(isColor = 'black'); }
    const  changeVis = () => { 
                if((isOpen1 === 0 || isOpen1 % 360 === 0) && (isOpen === 0 || isOpen % 360 === 0) ){ 
                        
                        setOpac(opac = '0');
                        //setTimeout(() => {  console.log("World!"); }, 10000);
                        setVis(openVis = 'hidden');
                        setWidth(width = '50px');
                        setHeight(height = '100px')
                        setTagName(tagName = 'NNOXO');                       
                        
                        setDisplay(display = img2);
                        setLeft(left = '78%');
                        setLeft1(left1 = '80%');
                        setTop(top = '-73%');
                        setTran(transition = 'visibility 0s 2s, opacity 2s linear');
                        //setOpac(opac = '0');
                        
                        setTextCol(textColor = '#111');
                }else {
                        setOpac(opac = '1');
                        setVis(openVis = 'visible');
                        setWidth(width = '350px');
                        setHeight(height = '400px')
                        setTagName(tagName = 'ENTER D WU');                       
                        
                        setDisplay(display = img2);
                        setLeft(left = '-5%');
                        setLeft1(left1 = '5%');
                        setTop(top = '0');
                        setTran(transition = 'opacity 2s linear');
                        //setOpac(opac = '0');
                        
                        setTextCol(textColor = '#fff');
                };
                
        }

        const App = () => {
                function handler({ key }) {
                      if (ESCAPE_KEYS.includes(String(key))) {
                      console.log('Escape key pressed!');
                      }
                      if (W.includes(String(key))) {
                        setIsOpen1(isOpen1 = isOpen1 + 90);
                        console.log('W key pressed!');
                      }
                      if (A.includes(String(key))) {
                        setIsOpen(isOpen - 90);
                        console.log('W key pressed!');
                      }
                      if (S.includes(String(key))) {
                        setIsOpen1(isOpen1 = isOpen1 - 90);
                        console.log('W key pressed!');
                      }
                      if (D.includes(String(key))) {
                        setIsOpen(isOpen + 90);
                        console.log('W key pressed!');
                      }
                }
              
                useEventListener('keydown', handler);
              
                return null;
              }


    //const colorRed = () => {if(isOpen > 0) setColor(!isColor);}
    useEffect(() => {
        const interval = setInterval(() => {
               changeVis();
        }, 1000);
        return () => clearInterval(interval);
      }, [isOpen1, isOpen]);

    return (
        <>
            <Containered>
                        <TestDiv isOpen={isOpen} width={width} height={height} left={left} top={top} isColor={isColor} openVis={openVis} icon90 = {icon90}  icon270 = {icon270} ></TestDiv>
                        <TestDiv1 isOpen1={isOpen1} width={width} height={height} left1={left1} top={top} isColor={isColor} openVis={openVis} icon0={icon0}  icon180 = {icon180}  ></TestDiv1> 
                        <BgFade opac={opac} changeVis={changeVis} transition={transition} openVis={openVis} ></BgFade>
                        <InnerDiv display={display} opac={opac} changeVis={changeVis} transition={transition} >                                
                                <TextDiv left='-18%' top= '-10%' width='50%' textColor={textColor}>{tagName}</TextDiv>
                                <TextSmallDiv left='25%' top= '82%' width='50%' textColor={textColor} openVis={openVis} opac={opac}> A & D TO CONTROL YIN</TextSmallDiv>
                                <TextSmallDiv left='25%' top= '86%' width='50%' textColor={textColor} openVis={openVis} opac={opac}> W & S TO CONTROL YANG</TextSmallDiv>                                
                                <MenuButton left='50%'  width = '5%' top='80%'>< MenuIcon/></MenuButton>
                        </InnerDiv>
                <App />               
            </Containered>
            
            

        </>           
    
    );
};

export default Nnoxo;

/*<InnerDiv>
                        <TestDiv isOpen={isOpen} isColor={isColor} width={width} height={height} icon0={icon0} icon90 = {icon90}  icon180 = {icon180} icon270 = {icon270} ></TestDiv> 
                        <Icon onClick={icon0}>
                                <CloseIcon />
                        </Icon>
                        <Icon onClick={icon90}>
                                <CloseIcon />
                        </Icon>
                        <Icon onClick={icon180}>
                                <CloseIcon />
                        </Icon>
                        <Icon onClick={icon270}>
                                <CloseIcon />
                        </Icon>
                    </InnerDiv>
                    
                    
                    
                                    <Icon onClick={icon0} openVis={openVis} top = '0px' left='48.5%' height = '120px'>
                        <CloseIcon />
                </Icon>
                <Icon onClick={icon90} openVis={openVis} right='0' bottom='50%' width = '200px'>
                        <CloseIcon />
                </Icon>
                <Icon onClick={icon180} openVis={openVis} bottom='1px' height = '120px' left='48.5%'>
                        <CloseIcon />
                </Icon>
                <Icon onClick={icon270} openVis={openVis} left='0' bottom='50%' width = '200px'>
                        <CloseIcon />
                </Icon>
                    
                    
                    */