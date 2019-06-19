import React from 'react';
import { Card } from 'antd';
import moment from 'moment';

const Tweet = (props) => (
	<Card hoverable>
		<Card.Meta title={props.tweet.contenido} description={moment(props.tweet.fecha).format('LL')}/>
	</Card>
);

export default Tweet;
