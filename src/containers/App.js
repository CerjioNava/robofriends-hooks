import React, { useState, useEffect } from 'react';					// Eliminamos Component, no lo usaremos ahora
import CardList from '../components/CardList.js';
//import { robots } from "./robots.js";
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';


// class App extends Component {			// Convertimos en función 
// 	constructor() {
// 		super();
// 		this.state = {
// 			//robots: robots,
// 			robots: [],
// 			searchfield: ''
// 		}
// 	}

	// Añadimos un lifecycle method, se ejecuta al realizar mounting.
	// componentDidMount() {
	// 	console.log("Check");
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(users=> this.setState({ robots: users }));
		
	// 	//this.setState({ robots: robots })
	// }

function App() {

	const [robots, setRobots] = useState([]);  						// Hooks
	const [searchfield, setSearchfield] = useState('');
	const [count, setCount] = useState(0);

	// Definimos dentro del hook el side effect que queremos
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users=> setRobots(users));
		console.log(count)
	}, [count]);				// Solo se ejecuta si el conteo cambia (si el boton se presiona). Esto es ejemplo por el useEffect.

	// Una función de evento que creamos, ahora es una variable const:
	const onSearchChange = (event) => {
		setSearchfield(event.target.value)							// Función Hook
	}

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});		
	//console.log(filteredRobots);

	return !robots.length ? 
		<h1>Loading</h1> :
		(
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<button onClick={() => setCount(count+1)}>Click me!</button>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);	
}

export default App;