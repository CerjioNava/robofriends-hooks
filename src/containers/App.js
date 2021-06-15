import React, { Component } from 'react';
import CardList from '../components/CardList.js';
//import { robots } from "./robots.js";
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';

/*
const state = {
	robots: robots,
	searchfield: ''
}
*/
/*
const App = () => {
	return (
		<div className="tc">
			<h1 className="tc">RoboFriends</h1>
			<SearchBox />
			<CardList robots={robots}/>
		</div>
	);
}
*/

class App extends Component {
	constructor() {
		super();
		this.state = {
			//robots: robots,
			robots: [],
			searchfield: ''
		}
	}

	// Añadimos un lifecycle method, se ejecuta al realizar mounting.
	componentDidMount() {
		console.log("Check");
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users=> this.setState({ robots: users }));
		
		//this.setState({ robots: robots })
	}

	// Una función de evento que creamos:
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
		//console.log(event.target.value);
	}

	render() {
		const { robots, searchfield } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});		
		console.log(filteredRobots);

		//if (!robots.length) 			
		//	return <h1>Loading</h1>
		return !robots.length ? 
			<h1>Loading</h1> :
		//else { 
		//	return (
			(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);	
		//)
	}
}

export default App;