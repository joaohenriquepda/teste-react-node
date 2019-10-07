import React, { Component } from 'react';

import api from "../../Services/api";
import { Link, withRouter } from "react-router-dom";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            body: "",
            user_id: ""
          }     
    }

    onChangeHandler = e =>{
        this.setState({
          selectedFile: e.target.files[0]
        })
      }

    onClickHandler = async e => {
      const { body } = this.state;
      console.log(body);
      
        const data = new FormData() 
        data.append('file', this.state.selectedFile, "name");
         api.post("/upload", data, { 
           params:{body}
          }).then(response => {
            this.props.history.push("/app");  
            console.log("sucesso");
          }).catch(response => {
            console.log("------",response);
          })
          console.log(data);
    }

  render() {
     return ( 
        <div className="Post">
            <input type="file" name="file" onChange={this.onChangeHandler}/>
            <input type="text" name="body" onChange={e => this.setState({ body: e.target.value })} />
            <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Postar</button>
            <Link to="/app">Voltar</Link>
        </div>
     )}
}

export default withRouter(Post);