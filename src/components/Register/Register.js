import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail" className="bold">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword" className="bold">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect" className="bold">Select Continent</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Europe</option>
                        <option>America</option>
                        <option>Asia</option>
                        <option>Africa</option>
                        <option>Oceania</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText" className="bold">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Write Something" />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend className="col-form-label col-sm-2 bold">Gender</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" /> {' '}
                            Male
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" /> {' '}
                            Female
                        </Label>
                    </FormGroup>
                    <Button className="button">Submit</Button>
                </FormGroup>
            </Form >
        )
    }
}

export default Register