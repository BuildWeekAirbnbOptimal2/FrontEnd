import React, { Component } from 'react';
import DesktopNav from './DesktopNav';
import Mobile from './Mobile';
import styled from 'styled-components'

const NavBarCon = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:flex-start;
`
export class NavBar extends Component {
    render() {
        return (
            <NavBarCon>
               <DesktopNav />
               <Mobile /> 
            </NavBarCon>
        )
    }
}

export default NavBar
