import React from "react";

import * as routes from "config/routes";
import Header from "components/Header";

const Home = () => {
	return (
		<Header></Header>
	);
};

export const element = <Home />;
export const path = routes.home;