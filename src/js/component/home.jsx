import React from "react";

import Jumbotron from "./jumbotron.jsx";

import Cards from "./card.jsx";

import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		<Cards/>
		</>
	);
};

export default Home;
