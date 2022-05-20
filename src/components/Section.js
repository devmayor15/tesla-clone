import React from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                { leftBtnText }
            </LeftButton>
            { rightBtnText &&
                 <RightButton>
                 { rightBtnText }
             </RightButton>
            }
           
        </ButtonGroup>
        </Fade>
        <DownArrow />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-image: url("/img/model-3.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/img/${props.bgImage}")`};
`

const ItemText = styled.div`
    z-index: -1;
    padding-top: 15vh;
    text-align: center;
    p{
        font-size: 20px;
        padding-top: 10px;
    }
    @media (max-width: 400px){
        h1{
            font-size: 25px;
        }
        p{
            font-size: 17px;
        }
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 25px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.button`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    border: none;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    font-weight: 600;
`

const RightButton = styled(LeftButton)`
    background-color: rgba(255, 255, 255, 0.829);
    color: #000;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`

const DownArrow = styled(KeyboardArrowDownIcon)`
    display: flex;
    flex-direction: column;
    margin: auto;
    cursor: pointer;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`