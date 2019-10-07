import React, { Component } from 'react';

import api from "../../Services/api";
import FormProfile from '../FormProfile/FormProfile';

import { Link, withRouter } from "react-router-dom";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[],
            msg_status:""
        }     
    }

    async componentDidMount() {
     this.getUserHandler();
    }

    getUserHandler = async =>{
        api.get("/users/profile",{}).then(response =>{
            console.log(response.data);
            this.setState({user: response.data})
        }).catch( error =>{
            this.setState({msg_status: "Houve um problema com esse perfil"})
        })
    }


   onChangeHandler = e =>{
        this.setState({
          selectedFile: e.target.files[0]
        })
      }

  render(props) {
    const user = this.state.user

    return ( 
        <div className="Profile">
            <FormProfile {...user}/>
            <Link to="/app">Profile</Link>
            <Link to="/post">Post</Link>
       </div>
     )}
}

export default withRouter(Profile);