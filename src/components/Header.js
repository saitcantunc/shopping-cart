import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className='header'>
			<div className='home'>
				<Link to='/'>
					<i class='fas fa-home'></i>
				</Link>
			</div>
			<div className='title'>Cart App</div>
			<div className='cart'>
				<Link to='/cart'>
					<i class='fas fa-shopping-cart'></i>
				</Link>
			</div>
		</div>
	);
};

export default Header;
