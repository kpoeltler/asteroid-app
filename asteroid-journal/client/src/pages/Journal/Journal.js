import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Axios from "axios";
import Date from "../../components/Date";

class Journal extends Component {
  state = {
    observation: []

  };
  // When this component mounts, grab the observation with the _id of this.props.match.params.id
  // e.g. localhost:3000/observations/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getObservations(this.props.match.params.id)
      .then(res => this.setState({ Observation: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (<div></div>);
      {/* <Container fluid>
        <Row>
          <Col size="sm-12">
            
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            </Col>
            </Row>
            <Row>
            <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.Observations.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
        {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
      </Container> */}
  }
} 
  

    
export default Journal;
