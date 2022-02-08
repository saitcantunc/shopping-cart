import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../Context";

const Header = () => {
	const context = useContext(BookContext);

	return (
		<div className='header-container'>
			<div className='header'>
				<div className='home'>
					<Link to='/'>
						<i class='fas fa-home'></i>
					</Link>
				</div>
				<div className='title'>Cart App</div>
				<div className='cart'>
					<Link to='/cart'>
						<i class='fas fa-shopping-cart'> ({context.totalCartCount})</i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
