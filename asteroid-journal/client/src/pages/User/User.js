import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Axios from "axios";
// import App from "./App"

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.loadUser = this.loadUser.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  };

  handleInputChange = e => {
    console.log("update the state with new stuff", e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  loadUser = () => {
    API.getUser()
      .then(res =>
        this.setState({
          email: res.data,
          password: ""
        })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("hi");
    if (this.state.username && this.state.password) {
      console.log("hi2");
      API.saveUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.loadUser())
        .catch(err => console.log(err));
    };
  };

  render() {
    console.log("this is the state!!", this.state);
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <form>
                <Input
                  name="email"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="email"
                />
                <Input
                  name="password"
                  onChange={this.handleInputChange.bind()}
                  placeholder="whatever you want"
                />
                <FormBtn
                  /* disabled={!(this.state.orbit && this.state.asteroid)} */
                  onClick={this.handleFormSubmit}
                >
                  Create User
                </FormBtn>
              </form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default User;

// componentDidMount() {
//   this.loadObservations();
// }

// loadObservations = () => {
//   axios.get()
//     .then(res =>
//       this.setState({ observations: res.data, asteroid: "", star: "", reflection: "" })
//     )
//     .catch(err => console.log(err));
// };

// deleteObservation = id => {
//   API.deleteObservation(id)
//     .then(res => this.loadObservations())
//     .catch(err => console.log(err));
// };

// handleInputChange = event => {
//   const { name, value } = event.asteroid;
//   this.setState({
//     []:value
//   });
