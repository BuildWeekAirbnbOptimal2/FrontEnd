import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

// const StyledBurger = styled.button`
//   position: absolute;
//   top: 5%;
//   left: 2rem;
//   display: flex;
//   flex-direction:  column-reverse;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: white;
//   border: none;
//   cursor: pointer;
//   display:none;
//   padding: 0;
//   z-index: 10;
//   @media screen and (max-width:768px) {
//     display:block;
// }
//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => open ? '0' : '1'};
//       transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//     }
//   }
//`
const DesktopNavBar = styled.nav`
display:flex;
flex-flow: row nowrap;
justify-content: space-evenly;
align-items: center;
background:  #500c2f ;
opacity:70%;
color: white;
height: 15vh;
box-shadow: 10px 10px 5px black;
@media screen and (max-width:768px) {
    display:none;
}
.logo{
    display:flex;
    font-size: 5vh;
    font-weight:bold;
    text-shadow: 3px 3px 3px black;
}

.nav-links{
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style:none;
    width: 50vw;

}

.link{
    color:white;
    font-size:2.5vh;
    text-decoration:none;
    
}
`
// const Burger = ({ open, setOpen }) => {
//     return (
//       <StyledBurger open={open} onClick={() => setOpen(!open)}>
//         <div />
//         <div />
//         <div />
//       </StyledBurger>
//     )
//   }
const DesktopNav = () => {
  
        return (
            <DesktopNavBar>
                <div className='logo'>Logo</div>
                <ul className='nav-links'>
                    <li>
                        <Link className='link'>Home</Link>
                    </li>
                    <li>
                        <Link className='link'>Add</Link>
                    </li>
                    <li>
                        <Link className='link'>View</Link>
                    </li><li>
                        <Link className='link'>Sign up</Link>
                    </li>
                    <li>
                        <Link className='link'>About</Link>
                    </li>
                </ul>
               
        {/* <Burger />*/}
               
            </DesktopNavBar>
        )
    }


export default DesktopNav
