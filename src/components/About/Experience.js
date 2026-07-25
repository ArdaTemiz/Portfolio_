import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={6} style={{ paddingBottom: "20px" }}>
        <Card className="quote-card-view" style={{ height: "100%" }}>
          <Card.Body>
            <Card.Title>
              Apprenti Développeur Full-Stack —{" "}
              <span className="purple">Ingram MICRO</span>, Beauvais
            </Card.Title>
            <Card.Subtitle style={{ paddingBottom: "15px" }}>
              2024 – 2025 · 1 an en alternance · Angular / Java (Spring)
            </Card.Subtitle>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Refonte complète d'une application interne
                d'alerting utilisée par plusieurs équipes métiers.
              </li>
              <li className="about-activity">
                <ImPointRight /> Implémentation de règles métier critiques :
                génération de rapports, exports réglementaires, calculs temporels
                multi-sources, script de migration de base de données.
              </li>
              <li className="about-activity">
                <ImPointRight /> Conception et intégration d'API REST sécurisées
                (JWT, gestion des rôles, traitement asynchrone).
              </li>
              <li className="about-activity">
                <ImPointRight /> Amélioration de la qualité logicielle : tests
                unitaires, gestion des cas limites, stabilisation post-déploiement.
              </li>
              <li className="about-activity">
                <ImPointRight /> Travail en méthodologie agile, échanges avec le
                métier et présentations fonctionnelles.
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} style={{ paddingBottom: "20px" }}>
        <Card className="quote-card-view" style={{ height: "100%" }}>
          <Card.Body>
            <Card.Title>
              Formation <span className="purple">& Objectif</span>
            </Card.Title>
            <ul>
              <li className="about-activity">
                <ImPointRight /> <b>ESIEA</b> — Formation ingénieur en alternance,
                rentrée 2026 (admis).
              </li>
              <li className="about-activity">
                <ImPointRight /> <b>BUT Informatique</b> — Université Sorbonne Paris
                Nord (IUT de Villetaneuse), Bac+3, 2022 – 2025.
              </li>
              <li className="about-activity">
                <ImPointRight /> <b>Stage de 2 mois</b> chez Soleilex en JavaScript /
                React (page FAQ de plus de 50 questions).
              </li>
            </ul>
            <Card.Text style={{ textAlign: "justify", paddingTop: "10px" }}>
              Je recherche une{" "}
              <span className="purple">alternance pour 2026</span> afin de continuer
              à approfondir mes compétences en architecture logicielle et systèmes.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Experience;
