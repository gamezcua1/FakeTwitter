import React, { Component } from 'react';
import { Row, Col } from 'antd';
import firebase from 'firebase';

import NuevoTweet from './NuevoTweet';
import Tweet from './Tweet';
import NiceModal from './NiceModal';
import { ThemeProvider } from './Providers';
import Button from "./Button";

class App extends Component {
	state = {
		tweets: {},
		theme: "blue"
	};

	componentDidMount() {
		firebase.database().ref('/tweets').on('value', (snapshot) => {
			this.setState({
				tweets: snapshot.val() || {}
			});
		});
	}

	subirTweet = (nuevoTweet) => {
		firebase.database().ref('/tweets').push({
			contenido: nuevoTweet,
			fecha: Date.now()
		});
	};

	eliminarTweet = (tweetKey) => {
		firebase.database().ref(`/tweets/${tweetKey}`).remove();
	}

	toggleTheme = () => {
		this.setState({
			theme: this.state.theme === "blue" ? "red" : "blue"
		})
	}

	render() {
		return (
			<ThemeProvider theme={{primaryColor: this.state.theme}}>
				<Row type="flex" justify="center">
					<Col span={8}>
						<button onClick={this.toggleTheme}>Cambiar a tema {this.state.theme === "blue" ? "red" : "blue"}</button>
						<NiceModal button={<Button>Escribir nuevo tweet</Button>}>
							<NuevoTweet subirTweet={this.subirTweet}/>
						</NiceModal>
					</Col>
					<Col span={8}>
						{Object.keys(this.state.tweets).map((tweetKey, i) => (
							<Tweet tweetKey={tweetKey} tweet={this.state.tweets[tweetKey]} key={tweetKey} eliminarTweet={this.eliminarTweet}/>
						))}
					</Col>
				</Row>
			</ThemeProvider>
		);
	}
}

export default App;
