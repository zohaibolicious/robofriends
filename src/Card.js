import React from 'react';
import './Card.css';

const Card = ({name,email,url,username}) =>{
	return(
		<div id='card' className= 'tc dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='profile' src={`${url}`}/>
			<div>
				<h2>{name}</h2>
				<p>{username}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
