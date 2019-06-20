import React from 'react';

const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children, theme }) => (
	<ThemeContext.Provider
		value={{
			primaryColor: '#0086C3',
			...theme
		}}
	>
		{children}
	</ThemeContext.Provider>
);
export const ThemeConsumer = ThemeContext.Consumer;
