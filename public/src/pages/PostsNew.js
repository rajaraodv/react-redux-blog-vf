import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import PostFormContainer from '../containers/PostFormContainer.js';

class PostsNew extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderContainer type="posts_new"/>
        <PostFormContainer />
      </div>
    );
  }
}


export default PostsNew;
