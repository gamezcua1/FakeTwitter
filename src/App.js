import React, { Component } from 'react';
import { Row, Col } from 'antd';

import NuevoTweet from './NuevoTweet';
import Tweet from './Tweet';

class App extends Component {
	state = {
		tweets: []
	};

	subirTweet = (nuevoTweet) => {
		const { tweets } = this.state;

		this.setState({
			tweets: [ ...tweets, nuevoTweet ]
		});
	};

	render() {
		return (
			<div className="App">
				<Row type="flex" justify="center">
					<Col span={8}>
						<NuevoTweet subirTweet={this.subirTweet} />
					</Col>
					<Col span={8}>{this.state.tweets.map((tweet, i) => <Tweet contenido={tweet} key={i} />)}</Col>
				</Row>
			</div>
		);
	}
}

export default App;
