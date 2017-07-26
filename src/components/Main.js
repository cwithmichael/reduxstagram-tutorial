import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Single from './Single';
import PhotoGrid from './PhotoGrid';
import { Route } from 'react-router-dom';

class Main extends Component {

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <Route exact path='/' render={() => <PhotoGrid {... this.props}/>}/>
        <Route path='/view/:postId' render={() => <Single {... this.props}/>}/>
      </div>
    )
  }
}

export default Main;
