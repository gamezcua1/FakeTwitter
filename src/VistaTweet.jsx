import React, { Component } from 'react';
import firebase from 'firebase';
import moment from 'moment';

class VistaTweet extends Component {
  state = {
    tweet: {}
  }

  componentDidMount() {
    firebase.database().ref(`/tweets/${this.props.tweetId}`).once('value', snapshot => {
      this.setState({
        tweet: snapshot.val() || {}
      })
    })
  }

  render() {
    const { tweet } = this.state;
    return (
      <div>
        <h1>Contenido: {tweet.contenido}</h1>
        <h3>Fecha: {moment(tweet.fecha).format('LL')}</h3>
      </div>
    );
  }
}

export default VistaTweet;