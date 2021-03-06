import React from "react";
import socket from "../socket";
// nodejs library that concatenates classes

import cardImg2 from "../assets/img/theme/meetscreenshoot.png";
import hatim from "../assets/img/theme/hatim.jpg";
import abdelmoghit from "../assets/img/theme/abdelmoghit.jpg";

import AuthService from "../services/auth.service";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,

} from "reactstrap";

// core components
import Navbar from "../components/Navbars/Navbar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";

class Landing extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  constructor(props) {
    super(props);
    this.clickJoin = this.clickJoin.bind(this);

    this.state = {
      roomName: "",
      userName: "",
      errMsg: "",
      redirect: null,
      userReady: false,
      roomInput: "",
      currentUser: { username: "" },
    };

    socket.on("FE-error-user-exist", ({ error }) => {
      if (!this.state.userReady) {
        if (!error) {
          const userName = "abdelmoghit";
          const roomName = this.generateToken(8);

          sessionStorage.setItem("user", userName);
          props.history.push(`/room/${roomName}`); 

          this.setState({
            userReady: true
          });
        }
      }
    });
  }

  generateToken(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  clickJoin() {
    socket.emit("BE-check-user", { roomId: this.state.roomName });
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <>
        <Navbar currentUser={this.state.currentUser} />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="10">
                      <h1 className="display-3 text-white">
                        Premium video meetings <span>for everyone.</span>
                      </h1>
                      <p className="lead text-white">
                        We re-engineered the service we built for secure,
                        high-quality business meetings, Catch Up, to make it
                        available for all, on your browser.
                      </p>
                      <Col lg="10" sm="3">
                        <Row>
                          <div className="btn-wrapper mb-4">
                            <Button
                              className="btn-icon mb-3 mb-sm-0"
                              color="info"
                              href=""
                              onClick={this.clickJoin}
                            >
                              <span className="btn-inner--icon mr-1">
                                <i className="fa fa-video-camera" />
                              </span>
                              <span className="btn-inner--text">
                                Start meeting
                              </span>
                            </Button>
                          </div>
                        </Row>
                      </Col>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--100">
            <Container>
              <Row className="justify-content-center">
                <Col lg="14">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Stay connected
                          </h6>
                          <p className="description mt-3">
                            Simple scheduling, easy recording, and adaptive
                            layouts help people stay engaged and connected.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Host large meetings
                          </h6>
                          <p className="description mt-3">
                            Invite up to 250 internal or external participants
                            to a meeting.
                            <br />
                            <br />
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Join from your phone
                          </h6>
                          <p className="description mt-3">
                            Use the browser app to join a video call, or join
                            audio-only by calling the dial-in number in the
                            meeting invite.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={cardImg2}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-world" />
                    </div>
                    <h3>Catch Up with everyone</h3>
                    <p>
                      With our platform, we can catch up all around the world
                      with everyone. Everyone is welcome to join you and benefit
                      your meeting as you please! We offer multiple features for
                      you and your attendees.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-circle-08" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Video conference</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-chat-round" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Chat Message</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Developer of this website</h2>
                  <p className="lead text-muted"></p>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={abdelmoghit}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">
                          IDHSAINE Abdelmoghit
                        </span>
                        <small className="h6 text-muted">
                          Cloud & DevOps engineer
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={hatim}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">
                          Hatim MOULINE
                          <br />
                          <br />
                        </span>
                        <span className="d-block mb-1"> </span>
                        <small className="h6 text-muted">
                          Cloud & DevOps engineer
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
