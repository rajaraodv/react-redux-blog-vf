import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';
import Header from '../containers/HeaderContainer.js';
import PostDetailsContainer from '../containers/PostDetailsContainer.js';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    return (
      <div className='container'>
        <Header type="posts_show" postId={this.props.params.id}/>
        <PostDetailsContainer id={this.props.params.id}/>
      </div>
    );
  }
}

export default PostsShow;
