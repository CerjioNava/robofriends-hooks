import React from 'react';

// Hay que recordar devolver solo un elemento a la vez.		//<h1>RoboFriends</h1>
const Card = ({ name, email, id, username } ) => {			// props
	//const { name, email, id } = props;
	return (						
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt="robots" src={`https://robohash.org/${id}test?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}


export default Card;



