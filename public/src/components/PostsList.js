import React, { Component } from 'react';
import { Link } from 'react-router';

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderCategories(categories) {
     return categories.map((c) => {
        c = c.trim();
        return (
          <Link to={"filter/" + c} key={c} className="list-group-item-text">{" " + c + " "}</Link>
        );
     });
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li className="list-group-item" key={post.Id}>
          <Link style={{color:'black'}} to={'/posts/' + post.Id}>
            <h3 className="list-group-item-heading">{post.Name}</h3>
          </Link>
            {this.renderCategories(post.Categories__c ? post.Categories__c.split(',') : [])}
        </li>
      );
    });
  }

  render() {
    if(this.props.loading) {
      return <div><h1>Posts</h1><h3>Loading...</h3></div>      
    } else if(this.props.error) {
      return <div><h1>Posts</h1><h4>There is an error</h4></div>      
    } else if(!this.props.posts) {
      return <div><h1>Posts</h1><h3>There are no posts</h3></div>      
    }

    return (
      <div>
        <ul className="list-group">
          {this.renderPosts(this.props.posts)}
        </ul>
      </div>
    );
  }
}


export default PostsList;
