import React from "react";
import Link from "react-router-dom/Link";

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
import DemoNavbar from "../components/Navbars/Navbar.js";
import SimpleFooter from "../components/Footers/SimpleFooter";

class ForgotPassword extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar currentPage="forgetPassword" />
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
                        <h4 style={{ fontWeight: "bold" }}>
                          Forgot password ?
                        </h4>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-muted mb-4">
                        <h6>
                          No worries! Just enter your email and we'll send you a
                          reset password link.
                        </h6>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                          >
                            Send recovery email
                          </Button>
                        </div>
                      </Form>
                      <div className="text-center text-muted mb-4">
                        <h6>Just remembered ?</h6>
                        <Link to="/login-page">
                          <Button
                            className="text-primary ml-1"
                            color="link"
                          >
                            Sign In
                          </Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
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

export default ForgotPassword;
