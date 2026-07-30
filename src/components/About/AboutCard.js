import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour tous le monde, je suis <span className="purple">Arda TEMIZ </span>
            et je viens de <span className="purple"> Creil,</span> en <span className="purple">France</span>
            <br />
            Je suis <span className="purple">ingénieur Full-Stack</span>, diplômé
            d'un <span className="purple">BUT Informatique</span> à l'Université Sorbonne
            Paris Nord (IUT de Villetaneuse) et admis à
            l'<span className="purple">ESIEA</span> pour la rentrée 2026 en formation
            ingénieur en alternance.
            <br />
            <br />
            J'ai passé <span className="purple">2 ans en alternance chez Ingram MICRO</span> (Beauvais)
            sur des applications internes critiques, avec notamment une expérience dans
            la <span className="purple">conception de pipelines de données</span>, le
            traitement avec <span className="purple">Python et SQL</span>, la modélisation
            de bases de données et le développement d'applications critiques.
            <br />
            <br />
            Je suis actuellement <span className="purple">à la recherche d'une alternance
            pour 2026</span> afin d'approfondir mes compétences sur{" "}
            <span className="purple">Databricks, Azure / AWS et les architectures Big
            Data</span> au sein d'une équipe Data.
            <br />
            <br />
            A part coder, voici les autres activités que j'aime bien pratiquer !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Faire du sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
            <li className="about-activity">
              <ImPointRight /> Coder 😝
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ceux qui travaillent dur ne sont pas tous récompensés, toutefois ! Tous ceux qui ont réusi ont travaillé dur"{" "}
          </p>
          <footer className="blockquote-footer">Arda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
