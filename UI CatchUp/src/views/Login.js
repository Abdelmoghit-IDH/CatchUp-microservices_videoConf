import Link from "react-router-dom/Link";
import React from "react";

import AuthService from "../services/auth.service";

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
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "../components/Navbars/Navbar.js";
import SimpleFooter from "../components/Footers/SimpleFooter";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    //this.form.validateAll();

    AuthService.login(this.state.username, this.state.password).then(
      () => {
        this.props.history.push("/");
        window.location.reload();
        this.setState({
          message: "Login successfully",
          successful: true,
        });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          successful: false,
          message: resMessage,
        });
      }
    );
    /* else {
      this.setState({
        loading: false,
      });
    } */
  }

  render() {
    return (
      <>
        <Navbar currentPage="login" currentUser="" />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-3">
                      <div className="text-muted text-center mb-3">
                        <h4 style={{ fontWeight: "bold" }}>Sign In</h4>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form
                        role="form"
                        type="submit"
                        ref={(c) => {
                          this.form = c;
                        }}
                      >
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-user" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Username"
                              type="email"
                              name="email"
                              autoComplete="off"
                              value={this.state.username}
                              onChange={this.onChangeUsername}
                              validations={[required]}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              name="password"
                              value={this.state.password}
                              onChange={this.onChangePassword}
                              validations={[required]}
                            />
                          </InputGroup>
                        </FormGroup>
                        <Row className="my-4">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customCheckLogin"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customCheckLogin"
                            >
                              <span>Remember me</span>
                            </label>
                          </div>
                        </Row>

                        {this.state.successful === false && (
                          <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                              {this.state.message}
                            </div>
                          </div>
                        )}

                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            disabled={this.state.loading}
                            onClick={this.handleLogin}
                            ref={(c) => {
                              this.checkBtn = c;
                            }}
                          >
                            {this.state.loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody> 
                  </Card>
                  <Row className="mt-3">
                    <Col className="text-light" xs="6">
                      <Link className="text-light" to="/forgot-password">
                        <small>Forgot password?</small>
                      </Link>
                    </Col>
                    <Col className="text-right" xs="6">
                      <Link className="text-light" to="/register-page">
                        <small>Create new account</small>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Login;
