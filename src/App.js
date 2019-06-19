import React, { Component } from 'react';
import { Row, Col } from 'antd';
import firebase from 'firebase';

import NuevoTweet from './NuevoTweet';
import Tweet from './Tweet';

class App extends Component {
	state = {
		tweets: {}
	};

	componentDidMount() {
		firebase.database().ref('/tweets').on('value', (snapshot) => {
			this.setState({
				tweets: snapshot.val()
			});
		});
	}

	subirTweet = (nuevoTweet) => {
		firebase.database().ref('/tweets').push({
			contenido: nuevoTweet,
			fecha: Date.now()
		});
	};

	render() {
		return (
			<div className="App">
				<Row type="flex" justify="center">
					<Col span={8}>
						<NuevoTweet subirTweet={this.subirTweet} />
					</Col>
					<Col span={8}>
						{Object.keys(this.state.tweets).map((tweetKey, i) => (
							<Tweet tweet={this.state.tweets[tweetKey]} key={tweetKey} />
						))}
					</Col>
				</Row>
			</div>
		);
	}
}

export default App;
