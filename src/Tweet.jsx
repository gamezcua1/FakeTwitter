import React from 'react';
import { Card, Icon } from 'antd';
import moment from 'moment';
import { navigate } from '@reach/router';

const Tweet = (props) => (
	<Card
		hoverable
		extra={<Icon type="close-circle" onClick={(e) => props.eliminarTweet(props.tweetKey)} />}
		onClick={(e) => navigate(`/tweet/${props.tweetKey}`, { state: { tweet: props.tweet } })}
	>
		<Card.Meta title={props.tweet.contenido} description={moment(props.tweet.fecha).format('LL')} />
	</Card>
);

export default Tweet;
