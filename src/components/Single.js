import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    const i = this.props.posts.findIndex(
      (post) => 
        post.code === 
        this.props.location.pathname.match(/.*view\/(.*)/)[1]
    );
  const post = this.props.posts[i];
  return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments />
      </div>
    )
  }
}

export default Single;
