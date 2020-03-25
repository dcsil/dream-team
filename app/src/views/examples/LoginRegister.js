import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class LoginRegister extends React.Component {

  getButton = name => {
    return (
      <Button
        className="btn-neutral btn-icon mr-4"
        color="default"
        href="#pablo"
        onClick={e => e.preventDefault()}
      >
        <span className="btn-inner--icon">
          <img alt="..." src={require(`assets/img/icons/common/${name}.svg`)} />
        </span>
        <span className="btn-inner--text">{name}</span>
      </Button>
    );
  };

  formData = [
    {
      icon: "ni ni-hat-3",
      placeholder: "Name",
      type: "text"
    },
    {
      icon: "ni ni-email-83",
      placeholder: "Email",
      type: "email"
    },
    {
      icon: "ni ni-lock-circle-open",
      placeholder: "Password",
      type: "password"
    }
  ];

  loginFormData = this.formData.slice(0, 1);

  signUpFormData = this.formData;

  formMap = data => {
    return (
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={data.icon} />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder={data.placeholder} type={data.type} />
        </InputGroup>
      </FormGroup>
    );
  };

  loginForm = (
    <Form role="form">
      {this.loginFormData.map(data => this.formMap(data))}
      <div className="custom-control custom-control-alternative custom-checkbox">
        <input
          className="custom-control-input"
          id=" customCheckLogin"
          type="checkbox"
        />
        <label className="custom-control-label" htmlFor=" customCheckLogin">
          <span className="text-muted">Remember me</span>
        </label>
      </div>
      <div className="text-center">
        <Button className="my-4" color="primary" type="button">
          Sign in
        </Button>
      </div>
    </Form>
  );

  signUpForm = (
    <Form role="form">
      {this.signUpFormData.map(data => this.formMap(data))}
      <div className="text-muted font-italic">
        <small>
          password strength:{" "}
          <span className="text-success font-weight-700">strong</span>
        </small>
      </div>
      <Row className="my-4">
        <Col xs="12">
          <div className="custom-control custom-control-alternative custom-checkbox">
            <input
              className="custom-control-input"
              id="customCheckRegister"
              type="checkbox"
            />
            <label
              className="custom-control-label"
              htmlFor="customCheckRegister"
            >
              <span className="text-muted">
                I agree with the{" "}
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
        </Col>
      </Row>
      <div className="text-center">
        <Button className="mt-4" color="primary" type="button">
          Create account
        </Button>
      </div>
    </Form>
  );

  bottomOptions = (
    <Row className="mt-3">
      <Col xs="6">
        <a
          className="text-light"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          <small>Forgot password?</small>
        </a>
      </Col>
      <Col className="text-right" xs="6">
        <a
          className="text-light"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          <small>Create new account</small>
        </a>
      </Col>
    </Row>
  );

  render() {
    return (
        <Col
          lg={this.props.register ? "6" : "5"}
          md={this.props.register ? "8" : "7"}
        >
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                {this.getButton("Github")}
                {this.getButton("Google")}
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              {this.props.register ? this.signUpForm : this.loginForm}
            </CardBody>
          </Card>
          {this.props.register ? "" : this.bottomOptions}
        </Col>
    );
  }
}

export default LoginRegister;
