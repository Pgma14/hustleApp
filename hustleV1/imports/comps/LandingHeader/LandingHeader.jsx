import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Button, Input, InputGroupDropDown, InputGroupButtonDropdown } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import SignUpSignIn from './SignUpSignIn.jsx';
import SubscribeForm from './SubscribeForm.jsx';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';

import './LandingHeader.css';

export default class LandingHeader extends Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.state = {
      SignUpClicked: false,
      SignInClicked: false,
    };

    this.SignUpClick = this.SignUpClick.bind(this);
    this.SignInClick = this.SignInClick.bind(this);
    this.onBackChevronClick = this.onBackChevronClick.bind(this);

    this.toggle = this.toggle.bind(this);
  }

    SignUpClick() {
      this.setState({
        SignUpClicked: true,
      });
    }

    SignInClick() {
      this.setState({
        SignInClicked: true,
      });
    }

    onBackChevronClick() {
      this.setState({
        SignInClicked: false,
        SignUpClicked: false,
      });
    }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {

    return (
      <div>
      <Container fluid className="Header_Background">
        <Row id="Header_Row1">
          <Col md="12" sm="12" xs="12" className="text-center" id="Header_Col">
              <Col md="12" sm="12" xs="12" className="text-center" id="Logo">
                <h1 className="animated fadeIn">
                  Your life just got easier.
                </h1>
                <br></br>
              <h4>Gigs by students, for students.</h4>
              </Col>
              <Col md="12" sm="12" xs="12" className="text-center" id="alert-signup" >
                  <Button color="primary" id="findservicebutton" href="https://docs.google.com/a/columbia.edu/forms/d/1h7gUQNtDyD-H_3iCQCTtcqIWdl9roMZgAzJqn9QPNGk/edit?usp=drive_web"><span>Find a service</span></Button>
                  <Button color="primary" id="listservicebutton" href="https://docs.google.com/forms/d/e/1FAIpQLSfC-Rrg5R8RaxswJLqSS34p_6IyYPtmVEOroxi-I4CPVIchQQ/viewform"><span>List a service</span></Button>
              </Col>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
