import React from 'react';

export default class Tweet extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
      <h4 id='username'>{this.props.username}</h4>
      <p>{this.props.children}</p>
      <div>
      );
  }
}