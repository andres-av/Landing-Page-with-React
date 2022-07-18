import React from "react";

import Jumbotron from "./jumbotron.jsx";

import Cards from "./card.jsx";

import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<Jumbotron/>
		<Cards/>
		<Footer/>
		</>
	);
};

export default Home;
