import React, { Component } from 'react';
import PostCard from "../PostCard/PostCard";
import { Link, withRouter } from "react-router-dom";
import api from "../../Services/api";


class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            error: "",
            data: []
          };
    }

    async componentDidMount() {
        this.timeliHandler();
    }

    timeliHandler = async => {
            api.get('/posts').then((response) => {
                this.setState({ data: response.data })
            }).catch(function (error) {
                // handle error
                console.log(error);
              })
              .finally(function () {
                // always executed
              });           
      };

  render() {
    let posts = null;
    posts = this.state.data.map((item, key) =>
      <PostCard {...item} />
    );

    return (
      <div className="Timeline">
        <Link to="/profile">Profile</Link>
        <Link to="/post">Postagem</Link>
        {posts}       
      </div>
    );
  }
}

export default withRouter(Timeline);
