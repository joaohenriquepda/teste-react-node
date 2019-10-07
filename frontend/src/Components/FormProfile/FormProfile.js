import React, { Component } from 'react';

import api from "../../Services/api";

class FormProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[],
            msg_status:""
        }     
    }

    async componentDidMount() { }

    onClickProfilePic = e => {
          const data = new FormData() 
          data.append('file', this.state.selectedFile, "name");
          api.put("/users", data, { }).then(response => {
                this.setState({msg_status: "Foto Atualizada com sucesso"})
            }).catch(response => {
                this.setState({msg_status: "Houve um problema com esse perfil"})
            })
      }

    onChangeHandler = e =>{
        this.setState({
          selectedFile: e.target.files[0]
        })
      }

  render(props) {
    const user = this.props
    console.log(this.props);
    
     return ( 
        <div className="FormProfile">
            <img src={user.profile_picture} alt="profile_picture" />

            <input
            type="email"
            placeholder="Endereço de e-mail"
            value = {user.email}
            onChange={e => this.setState({ email: e.target.value })}
          />

        <input
            type="text"
            placeholder="username"
            value = {user.username}
            onChange={e => this.setState({ username: e.target.value })}
          />

        <input
            type="text"
            placeholder="Name"
            value = {user.name}
            onChange={e => this.setState({ name: e.target.value })}
          />

        <input
            type="text"
            placeholder="Bio"
            value = {user.bio}
            onChange={e => this.setState({ bio: e.target.value })}
          />

           <input type="file" name="file" onChange={this.onChangeHandler}/>
           <button type="button" class="btn btn-success btn-block" onClick={this.onClickProfilePic}>Postar</button>
        </div>
     )}
}

export default FormProfile;
