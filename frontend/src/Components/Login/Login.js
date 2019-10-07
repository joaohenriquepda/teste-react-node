import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../Services/api";
import { login } from "../../Services/auth";

import { Form, Container } from "./style";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha com as informações para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        console.log("-------",response);
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleLogin}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Logar</button>
          <hr />
          <Link to="/signup">Registrar-se</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);