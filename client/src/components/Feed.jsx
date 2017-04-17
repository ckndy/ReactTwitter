import React from 'react';
import Feed from './TweetList'

var sampleData = [
{id: 1, username: '', name: 'Chris', text: ''},
{id: 2, username: '', name: 'Ryan', text: ''},
{id: 3, username: '', name: 'Daniel', text: ''},
{id: 4, username: '', name: 'John', text: ''},
{id: 5, username: '', name: 'Murray', text: ''},
{id: 6, username: '', name: 'Alastair', text: ''},

{id: 7, username: '', name:  'Ellen', text: ''},
{id: 8, username: '', name: 'Michaela', text: ''},
{id: 9, username: '', name: 'Jodie', text: ''},
{id: 10, username: '', name: 'Ruth', text: ''},
{id: 11, username: '', name: 'Colin', text: ''},
{id: 12, username: '', name: 'Arlene', text: ''},

];

export default class Feed extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: sampleData
    };
  }

  render () {
    return 
    <div>
    <h1>Tweets</h1>
    <TweetList tweets={this.state.data}/>
    );
  }
}