import React from "react";
import PropTypes from "prop-types";

function Nav(props) {
	const logged_out_nav = (
		<nav>
			<div class='nav-wrapper'>
				<a href='#!' class='brand-logo center'>
					JWT Auth
				</a>
				<ul class='left hide-on-med-and-down'>
					<li onClick={() => props.display_form("login")}>
						<a href='#!'>Login</a>
					</li>
				</ul>
			</div>
		</nav>
	);

	const logged_in_nav = (
		<nav>
			<div class='nav-wrapper'>
				<a href='#!' class='brand-logo center'>
					JWT Auth
				</a>
				<ul class='left hide-on-med-and-down'>
					<li onClick={props.handle_logout}>
						<a href='#!'>Log Out</a>
					</li>
				</ul>
			</div>
		</nav>
	);
	return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
	logged_in: PropTypes.bool.isRequired,
	display_form: PropTypes.func.isRequired,
	handle_logout: PropTypes.func.isRequired
};
