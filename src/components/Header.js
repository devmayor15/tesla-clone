import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import Rotate from 'react-reveal/Rotate';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from 'react-redux';

function Header() {
  const [ burgerStatus, setBurgerStatus ] = useState(false);
  const cars = useSelector(selectCars)

  return (
    <Container>
        <a>
          <img src="/img/logo.svg" alt='Tesla Logo' />
        </a>
        <Menu>
          { cars && cars.map((car, index) =>
            <a key={index} href="#">{ car }</a>
          )}
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <Rotate>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
          </Rotate>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <ul>
          { cars && cars.map((car, index) =>
            <li key={index}><a href="#">{ car }</a></li>
            
          )}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Find us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
            <Language>
              <LangIcon />
              <LangType>
                <h3>United States</h3>
                <p>English</p>
              </LangType>
            </Language>
          </ul>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a{
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: no-wrap;
    font-size: 15px;
  }
  @media(max-width: 768px){
    display: none;
  }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
   a{
    font-weight: 600;
    margin-right: 10px;
    font-size: 15px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 16;
  transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.6s ease-in-out;
  ul{
    list-style: none;
  }
  padding: 20px;
  li{
    padding: 15px 0;
  }
  li:hover{
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.103);
    transition: all 0.4s ease-out;
  }
    a{
      font-weight: 600;
    }
  }
  overflow-y: scroll;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Language = styled.div`
  display: flex;
  padding-top: 15px;
`

const LangIcon = styled(LanguageIcon)``

const LangType = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  h3{
    font-size: 15px;
  }
  p{
    font-size: 13px;
    padding-top: 4px;
  }
`