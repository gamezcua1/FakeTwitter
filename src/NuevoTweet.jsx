import React, { useState } from 'react';

const NuevoTweet = (props) => {
	const [ contenido, setContenido ] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		props.subirTweet(contenido);
		setContenido("");
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="contenido">
					Escribe un nuevo tweet!
					<input id="contenido" value={contenido} onChange={(e) => setContenido(e.target.value)} />
					<button disabled={contenido === '' && contenido.length >= 255}>Tweet</button>
				</label>
			</form>
		</div>
	);
};

export default NuevoTweet;
