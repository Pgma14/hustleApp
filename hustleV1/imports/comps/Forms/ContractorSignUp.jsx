import React, {Component} from 'react';
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


import './ContractorSignUp.css';



  const style = {
    color: 'white'
  };

export default class ContractorSignUp extends Component {
  state = {
    language: false,
    headshots: false,
    tutoring: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {

    return (
      <Container>
        <Row>
          <Col md="12" sm="12" xs="12">

            <div className="inputwrapper">
              <input className="textinput" type="e-mail" placeholder="E-mail">
              </input>

              <FormControl component="fieldset">
        <FormLabel component="legend"><h5 className="formtext">Services you can provide</h5></FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                style={style}
                checked={this.state.language}
                onChange={this.handleChange('gilad')}
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
                onChange={this.handleChange('jason')}
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
                onChange={this.handleChange('antoine')}
                value="Tutoring (You are paid $15 - $25 / hr)"
              />
            }
            label="Tutoring (You are paid $15 - $25 / hr)"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={style}
                checked={this.state.tutoring}
                onChange={this.handleChange('antoine')}
                value="Tutoring (You are paid $15 - $25 / hr)"
              />
            }
            label="Doing laundry (You are paid $20 / hr)"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={style}
                checked={this.state.tutoring}
                onChange={this.handleChange('antoine')}
                value="Tutoring (You are paid $15 - $25 / hr)"
              />
            }
            label="Cleaning apartments (You are paid $20 - $30 / hr)"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={style}
                checked={this.state.tutoring}
                onChange={this.handleChange('antoine')}
                value="Tutoring (You are paid $15 - $25 / hr)"
              />
            }
            label="Graphic design (You are paid $20 - $40 / hr)"
          />
        </FormGroup>

      </FormControl>
            </div>

          </Col>
        </Row>
      </Container>
                                    )
  }
};
