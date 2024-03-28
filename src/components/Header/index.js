import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as routes from "config/routes";

const navigation = [
	{
		label: "Home",
		value: routes.home,
	},
];

const Header = ({ navigation }) => {
	return (
		<div>
			<div>icon</div>

			<div>
				{navigation.map(({ label, value }) => (
					<Link key={`navigation-${value}`} to={value}>{label}</Link>
				))}
			</div>

			<div>
				<button>join</button>
			</div>
		</div>
	);
};

Header.propTypes = {
	navigation: PropTypes.array.isRequired,
};

Header.defaultProps = {
	navigation,
};

export default Header;
