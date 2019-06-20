import React, { useState } from 'react';
import Button from './Button';

const NuevoTweet = (props) => {
	const [ contenido, setContenido ] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		props.subirTweet(contenido);
		props.cerrarModal();
		setContenido("");
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="contenido">
					Escribe un nuevo tweet! 
					{' '}
					<input id="contenido" value={contenido} onChange={(e) => setContenido(e.target.value)} />
					{' '}
					<Button disabled={contenido === '' && contenido.length >= 255}>Tweet</Button>
				</label>
			</form>
		</div>
	);
};

export default NuevoTweet;
