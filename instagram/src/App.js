import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authentication';



class App extends Component {

  render() {
    
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}


export default Authenticate(App);

