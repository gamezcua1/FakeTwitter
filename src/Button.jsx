import React from 'react';
import styled from 'styled-components';
import { ThemeConsumer } from './Providers';

const StyledButton = styled.button`
	border-radius: 18px;
	border: 2px solid ${(props) => props.primaryColor ? props.primaryColor : "#9F9F9F"};
	background-color: #fff;
	color: ${(props) => props.primaryColor ? props.primaryColor : "#9F9F9F"};

	font-weight: normal;
	font-size: 14px;
	text-align: center;
	height: 35px;
	min-width: 120px;

	&:hover {
		border: 2px solid ${(props) => props.primaryColor ? props.primaryColor : "#9F9F9F"};
		background-color: #eee;
		color: ${(props) => props.primaryColor ? props.primaryColor : "#9F9F9F"};
	}

	&:active {
		border: 2px solid ${(props) => props.primaryColor ? props.primaryColor : "#9F9F9F"};
		background-color: ${(props) => props.primaryColor ? props.primaryColor : "#9F9F9F"};
		color: #fff;
	}
`;

const Button = ({ children, ...rest }) => (
	<ThemeConsumer>
		{(context) => (
			<StyledButton primaryColor={context.primaryColor} {...rest}>
				{children}
			</StyledButton>
		)}
	</ThemeConsumer>
);
export default Button;
