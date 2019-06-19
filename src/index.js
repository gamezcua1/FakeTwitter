import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import firebase from 'firebase';
import moment from 'moment';
import 'moment/locale/es';

const firebaseConfig = {
	apiKey: 'AIzaSyCz_dXRvkdTRhUqrTJ8oB8vFnYMA5Um9-Y',
	authDomain: 'myagent-eb253.firebaseapp.com',
	databaseURL: 'https://myagent-eb253.firebaseio.com',
	projectId: 'myagent-eb253',
	storageBucket: 'myagent-eb253.appspot.com',
	messagingSenderId: '593736707593',
	appId: '1:593736707593:web:a20319d65062493d'
};
firebase.initializeApp(firebaseConfig);
moment.locale('es');


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
