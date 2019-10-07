import React, { Component } from 'react';
import {  withRouter } from "react-router-dom";

// import api from "./../Services/api";

class Post extends Component {
  constructor(props) {
      super(props);
      this.state = {
          posts:[],
          msg_status:""
      }     
  }


render(props) {
  const post = this.props;
  console.log(post);
  
  return ( 
     <div className="Post">
      <h1>sss</h1>
      {post.body}
      <div className="Profile-photo">
        <canvas className="Profile-photo-canvas" />
        <span className="Profile-photo-container">
          <img src={post.image_url} alt="image_1" />
        </span>
      </div>
      <div className="Profile-name">
        <a  >
          {post.body}
        </a>
      </div>
  </div>

  )}
  }
  export default withRouter(Post);