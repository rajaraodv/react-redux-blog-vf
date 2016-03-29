import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import PostsList from '../containers/PostsListContainer.js';

class PostsIndex extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderContainer type="posts_index"/>
        <PostsList />
      </div>
    );
  }
}


export default PostsIndex;
