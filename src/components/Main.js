import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Single from './Single';
import PhotoGrid from './PhotoGrid';
import { Route } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <Route exact path='/' component={PhotoGrid} />
        <Route path='/view/:postId' component={Single} />
      </div>
    )
  }
}

export default Main;
