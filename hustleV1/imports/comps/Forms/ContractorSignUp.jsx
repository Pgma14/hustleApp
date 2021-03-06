import React, {Component} from 'react';
import { render, ReactDOM } from 'react-dom';
import {Container, Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { withTracker } from 'meteor/react-meteor-data';

import { Users } from '../../collections.js';


import './ContractorSignUp.css';



  const style = {
    color: 'white'
  };

export default class ContractorSignUp extends Component {


  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const user = this.refs.emailInput.value.trim();

    Users.insert({
      user,
      createdAt: new Date(), // current time
    });

    // Clear form
    this.refs.emailInput.value = '';
  }

  state = {
    language: false,
    headshots: false,
    tutoring: false,
    laundry: false,
    apartments: false,
    graphicdesign: false,
    other: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {

    return (
      <Container>
        <Row>
          <Col md="12" sm="12" xs="12">

            <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="inputwrapper animated fadeInLeft">

              <input className="textinput" type="e-mail" placeholder="E-mail" ref="emailInput">
              </input>

              <FormControl component="fieldset">

        <FormLabel component="legend"><h5 className="formtext">Services you can provide:</h5></FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                style={style}
                checked={this.state.language}
                onChange={this.handleChange('language')}
                value="Teaching a language (You are paid $15 - $20 / hr)"
              />
            }
            label="Teaching a language (You are paid $15 - $20 / hr)"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={style}
                checked={this.state.headshots}
                onChange={this.handleChange('headshots')}
                value="Professional Headshots (You are paid $20 - $30 / hr)"
              />
            }
            label="Professional Headshots (You are paid $20 - $30 / hr)"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={style}
                checked={this.state.tutoring}
                onChange={this.handleChange('tutoring')}
                value="Tutoring (You are paid $15 - $25 / hr)"
              />
            }
            label="Tutoring (You are paid $15 - $25 / hr)"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={style}
                checked={this.state.laundry}
                onChange={this.handleChange('laundry')}
                value="Doing laundry (You are paid $20 / hr)"
              />
            }
            label="Doing laundry (You are paid $20 / hr)"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={style}
                checked={this.state.apartments}
                onChange={this.handleChange('apartments')}
                value="Cleaning apartments (You are paid $20 - $30 / hr)"
              />
            }
            label="Cleaning apartments (You are paid $20 - $30 / hr)"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={style}
                checked={this.state.graphicdesign}
                onChange={this.handleChange('graphicdesign')}
                value="Graphic design (You are paid $20 - $40 / hr)"
              />
            }
            label="Graphic design (You are paid $20 - $40 / hr)"
          />

          <div id="otherinputwrapper">
              <Checkbox
                style={style}
                checked={this.state.other}
                onChange={this.handleChange('other')}
                value="other"
              />
            <input className="textinput" id="otherinput" type="text" placeholder="Other">
            </input>
          </div>

          <button id="formsubmitbutton" onClick={this.handleSubmit.bind(this)}><span>Submit</span></button>
        </FormGroup>

      </FormControl>
            </div>

            </form>

          </Col>
        </Row>
      </Container>
                                    )
  }
};
