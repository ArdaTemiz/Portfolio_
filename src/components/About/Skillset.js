import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const skills = [
  {
    title: "Stack principale",
    items: "Python • SQL • DataBricks • Amazon AWS • Apache Spark • PostgreSQL • Docker • Git",
  },
  {
    title: "Langages",
    items: "Python • SQL • Java • TypeScript • JavaScript • PHP • C • HTML5 • CSS3",
  },
  {
    title: "Développement Frontend",
    items: "Angular (principal) • React • Vue.js",
  },
  {
    title: "Développement Backend",
    items: "Spring Boot (principal) • Node.js • Flask • API REST • JWT • RBAC",
  },
  {
    title: "Bases de données",
    items: "PostgreSQL • MySQL • MongoDB • Modélisation relationnelle",
  },
  {
    title: "DevOps & Environnement",
    items: "Docker • CI/CD (GitHub Actions) • Linux / VPS • PM2 • Git • Automatisation de déploiement",
  },
];

function Skillset() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill) => (
        <Col md={4} key={skill.title} style={{ paddingBottom: "20px" }}>
          <Card className="quote-card-view" style={{ height: "100%" }}>
            <Card.Body>
              <Card.Title className="purple">{skill.title}</Card.Title>
              <Card.Text style={{ textAlign: "left" }}>{skill.items}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Skillset;
