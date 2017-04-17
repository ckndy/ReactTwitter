import React from 'react';
import Tweet from './Tweet';

export default class TweetList extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const tweetComponents = this.props.tweet.map((tweet) => {
      return (
        <Tweet username={tweet.username} key={tweet.id}>
        {tweet.text}
        </Tweet>
        );
    })
    return (
      <div>
      { tweetComponents }
      </div>
      );
  }
}