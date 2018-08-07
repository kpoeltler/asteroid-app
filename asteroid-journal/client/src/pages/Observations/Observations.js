import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import Axios from "axios";

// import App from "./App"

class Observations extends Component {
  
    state = {
      observations: [],
      asteroid: "",
      orbit: "",
      reflection: ""
    };

    componentDidMount() {
      this.loadObservations();
    }

    loadObservations = () => {
      console.log("works");
      API.getObservations()
        .then(res =>
          this.setState({ observations: res.data, asteroid: "", orbit: "", reflection: "" },()=>{console.log("State was updated i think?")})
        )
        .catch(err => console.log(err));
    };
  

  handleInputChange = event => {
    console.log("update the state with new stuff", event.target.value);
    const { name, value } = event.target;
    this.setState({ [name]: value
     });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    console.log("hi");
    if (this.state.asteroid && this.state.orbit) {
      console.log("hi2");
     API.saveObservation({
          asteroid: this.state.asteroid,
          orbit: this.state.orbit,
          reflection: this.state.reflection
        })
        .then(res => this.loadObservations())
        .catch(err => console.log(err));
    }
  };
  // this.handleInputChange = this.handleInputChange.bind(this);
  // this.loadObservations = this.loadObservations.bind(this);
  // this.handleFormSubmit = this.handleFormSubmit.bind(this);


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <form>
                <Input
                  name="asteroid"
                  onChange={this.handleInputChange}
                  placeholder="Asteroid's name"
                />
              
                <Input
                  name="orbit"
                  onChange={this.handleInputChange}
                  placeholder="Which orbit? Atira, Inner or Outer Main-belt, TransNeptunian, Aten, Parabolic, Hyperbolic, Amor, Jupiter Trojan, Mars-crossing, or Centaur"
                />

                <TextArea
                  name="reflection"
                  onChange={this.handleInputChange}
                  placeholder="Reflection"
                />
                <FormBtn
                  /* disabled={!(this.state.orbit && this.state.asteroid)} */
                  onClick={this.handleFormSubmit}
                >
                  Submit Entry
                </FormBtn>
              </form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Observations;

// componentDidMount() {
//   this.loadObservations();
// }

// loadObservations = () => {
//   axios.getObservations()
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
// };
