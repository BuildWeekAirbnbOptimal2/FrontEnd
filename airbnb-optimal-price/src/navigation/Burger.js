import React from 'react'
import styled from 'styled-components'

const BurgerStyles = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background:transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 50;
  @media screen and (max-width:768px) {
    display:flex;
  &:focus {
    outline: none;
  }
}
  div {
    width: 2rem;
    height: 0.25rem;
    background: black ;
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
  `
const Burger = () => {
    
return (
    <BurgerStyles>
            <div />
            <div />
            <div />
    </BurgerStyles>
)
}

export default Burger;