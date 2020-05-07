import React from "react";
import { Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import "./App.css";

class App extends React.Component {
	render() {
		return (
			<section>
				<Navbar />
				<Route exact path="/gallery" render={(props) => (
					<Gallery className="mw-content-margin"/>
				)} />
			</section>
		);
	}
}

export default App;
