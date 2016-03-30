import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import PostsIndex from './pages/PostsIndex';
import PostsNew from './pages/PostsNew';
import PostsShow from './pages/PostsShow';

// let prefix = location.pathname;
// let index = prefix;
// let postsNew = prefix + '/posts/new';
// let postsShow = prefix + '/posts/:id';

let index = '/';
let postsNew = '/posts/new';
let postsShow = '/posts/:id';

export default (
  <Route path={index} component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path={postsNew} component={PostsNew} />
    <Route path={postsShow} component={PostsShow} />
  </Route>
);
