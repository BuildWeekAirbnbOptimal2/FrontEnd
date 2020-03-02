import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import styled from 'styled-components'
import Burger from './Burger';
const ButtonCon = styled.nav`
body {
	padding: 0;
	margin: 0;
}

.container {
	position: relative;
	
}

.nav {
	width: 30vw;
	border-width: 0 1px 1px 0;
	border-style: solid;
	border-color: #888;
	position: absolute;
	top: 0;
	z-index: 999;
	background:  maroon;  /*linear-gradient(to right, #3a6186cb, #89253eb4); */
	right: -35vw;
	-webkit-transition: right 0.3s ease-in;
	-o-transition: right 0.3s ease-in;
	transition: right 0.3s ease-in;
	align-self:flex-end;
	box-shadow: -10px 10px 5px black;
	
	@media screen and (min-width:769px){
		display:none;
	}

}
.nav-links{
        display:flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: center;
        list-style:none;
        height:60vh;

}

.link{
        color:white;
        font-size:2.5vh;
        text-decoration:none;
    
}
img{
        align-self:center;
        height:10vh;
        width:20vw;
        filter: brightness(0) invert(1);
}
    a:hover{
        color:red;
}
@media screen and ( min-width: 200px ){
	.nav {
	border:none;
    align-self:flex-end;
    background:  maroon;  /*linear-gradient(to right, #3a6186cb, #89253eb4); */
	opacity:1;
	box-shadow: -10px 10px 5px black;
	width: 50vw;
	right: -5000vw;
	}
}

.close {
	display: flex;
	justify-content: flex-end;
	padding: 0 15px 0 0;
	font-size: 3rem;
	font-weight: bold;
	color: #AAA;
	cursor: pointer;
}

.nav.show {
	right: 0;
}

.menu-button {
	position:relative;
	z-index: 99;
	font-size: 36px;
	cursor: pointer;
	padding: 10px 8px;
	
}

.menu-items {
	padding: 0;
	margin: 0;
}

.menu-list {
	list-style: none;
}

.logo{
        display:flex;
        flex-direction:column;
        font-size: 2.5vh;
        font-weight:bold;
        text-shadow: 3px 3px 3px black;
        color:white;
        margin-left:3.5rem;
        text-decoration:none;

}
a:hover{
		color:red;
}
`

class ButtonBurger extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			isSidebarOpen: false
		}
	}

	handleMenuButtonClick = () => {
		this.setState(  { isSidebarOpen: ! this.state.isSidebarOpen } )
	};

	render() {
		const { isSidebarOpen } = this.state;

		return(
            <ButtonCon>
			<div className="container">
				<div className="menu-button" onClick={this.handleMenuButtonClick}>
                    <Burger />

				</div>
				{(
					<nav className={ `nav ${isSidebarOpen ? 'show' : ''}` }>
						<div
							onClick={this.handleMenuButtonClick}
							className="close"
						>
						<Burger />
						</div>
                        <div className=''>
                        <div >
                                <Link to='/src/components/' 
                                    className='logo'
                                        >Airbnb Pricer
                                            <img src={logo}   
                                                alt="logo-img" 
                                                />   
                                                </Link>
                                             <ul className='nav-links'>
                                                <li>
                                            <Link to='/src/components/' 
                                                className='link hidden'
                                                    >Add Props
                                                        </Link>
                                                            </li>
                                                                <li>
                                            <Link to='/src/components/'
                                    className='link hidden'
                                >View Props 
                             </Link>
                         </li>
                            <li>
                               <Link to='/src/components/' 
                                  className='link hidden'    
                                     >About Us   
                                         </Link>
                                             </li>
                                                <li>
                                                   <Link to='/src/components/Login' 
                                                      className='link hidden'
                                                         >LogOut
                                                        </Link>
                                                    </li>
                                                 </ul>
                                      </div>
                        </div>
					</nav>
				)}
            	</div>
            </ButtonCon>
		)
	}
}

export default ButtonBurger;