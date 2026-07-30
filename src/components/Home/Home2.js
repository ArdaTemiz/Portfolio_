import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ MOI <span className="purple"> ME PRÉSENTER </span> 
            </h1>
            <p className="home-about-body">
              Depuis mes débuts au lycée, j'ai commencé à m'intéresser
              à l'informatique et j'ai commencé à y trouver une passion notamment dans l'IA, la cybersécurité et le développement...
              <br />
              <br />
              Je suis aujourd'hui
              <i>
                <b className="purple"> ingénieur Full-Stack</b>
              </i>
              , après un <b className="purple">BUT Informatique</b> et
              <b className="purple"> 2 ans d'alternance chez Ingram MICRO</b>, où j'ai
              travaillé sur la conception de pipelines de données, le traitement avec
              Python et SQL, et le développement d'applications internes critiques.
              <br />
              <br />
              Ma stack principale est&nbsp;
              <i>
                <b className="purple">Python</b>, <b className="purple">SQL</b> et{" "}
                <b className="purple">DataBricks</b>
              </i>
              , avec de l'<b className="purple">Apache Spark</b>, du{" "}
              <b className="purple">Amazon AWS</b>, du <b className="purple">PostgreSQL</b>{" "}
              et du <b className="purple">Docker</b>.
              <br />
              <br />
              À côté, je continue d'explorer&nbsp;
              <i>
                <b className="purple">Angular</b>, <b className="purple">Spring Boot</b> et{" "}
                <b className="purple">l'IA / le Deep Learning</b>
              </i>
              &nbsp;à travers mes projets personnels, comme SmartFace ou mon Ticket
              Manager. Je recherche actuellement une
              <b className="purple"> alternance pour 2026</b> au sein d'une équipe Data,
              dans le cadre de ma formation ingénieur à l'ESIEA.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>POUR ME TROUVER</h1>
            <p>
              SI vous souhaitez me <span className="purple">Contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ArdaTemiz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arda-temiz-7b3515295/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
