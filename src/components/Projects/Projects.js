import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import paqueta from "../../Assets/Projects/paqueta.png";
import DiEvo from "../../Assets/Projects/DiEvo.png";
import soleilex from "../../Assets/Projects/soleilex.png";
import Fan2Foot from "../../Assets/Projects/Fan2Foot.png";
import smartface from "../../Assets/Projects/smartface.png";
import ticketmanager from "../../Assets/Projects/ticketmanager.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import rapportChatbot from "../../Assets/Rapport_ChatbotAutomobile.pdf";
import gemcreil from "../../Assets/Projects/gemcreil.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Quelques projets auxquels j'ai travaillé ces derniers temps.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemcreil}
              isBlog={false}
              title="GEM Creil"
              description="Site vitrine officiel de GEM Creil, une association qui propose rencontres, activités et accompagnement aux jeunes de Creil.
              Développé en Next.js 14 (App Router) et TypeScript, avec Tailwind CSS, Framer Motion, React Hook Form + Zod pour les formulaires, et une intégration Stripe pour les dons.
              Tout le contenu du site (textes, chiffres, activités) est éditable sans toucher au code, via des fichiers de données dédiés."
              ghLink="https://github.com/ArdaTemiz/gemcreil"
              demoLink="https://gemcreil-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketmanager}
              isBlog={false}
              title="Ticket Manager (type Jira)"
              description="Application complète de gestion de tickets et de projets, développée en React côté front et Node.js côté back.
              Elle gère l'authentification sécurisée, les rôles, les statuts et priorités des tickets, l'assignation, l'historique et les commentaires.
              J'ai également mis en place un pipeline CI/CD avec GitHub Actions (build, tests et déploiement automatique) sur un VPS Linux avec PM2."
              demoLink="http://91.230.110.234/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartface}
              isBlog={false}
              title="SmartFace — Deep Learning (CNN)"
              description="Application web d'analyse d'images qui prédit l'âge et le genre à partir d'une photo.
              J'y ai conçu un modèle CNN et travaillé l'ensemble du pipeline IA : préparation du dataset, entraînement, validation puis mise en production du modèle derrière une interface web simple d'utilisation."
              ghLink="https://github.com/youneschrimni/SmartFace"
              demoLink="http://91.230.110.234/smartface/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="AutoChat — Chatbot Automobile (RAG / LLM)"
              description="Chatbot intelligent spécialisé dans le conseil et l'information automobile, réalisé en Angular (Material) côté front et Flask / MongoDB côté back.
              Le cœur du projet est un système RAG : les documents PDF techniques sont découpés en chunks, vectorisés avec MiniLM et stockés dans MongoDB Atlas (index vectoriel), puis les extraits les plus pertinents sont fournis au modèle Mistral 7B pour générer une réponse contextuelle.
              L'assistant répond à plus de 500 questions automobiles, avec authentification et historique des conversations. Note : le quota de tokens Hugging Face peut limiter les réponses lors d'un essai."
              ghLink="https://github.com/youneschrimni/ChatBotAutomobile"
              docLink={rapportChatbot}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paqueta}
              isBlog={false}
              title="Perform Vision"
              description="C'est un projet codé entièrement en PHP et qui a été fait dans le cadre d'un projet pour l'IUT appelé SAE (Situation Apprentissage Evaluation). Le but premier du site était de trouver
              des formateurs par rapport à la formation qu'on recherchait tel que Python ou Java par exemple. On avait une liste de formateurs à mettre et à implémenter pour les rechercher et les trouver."
              ghLink="https://gitlab.sorbonne-paris-nord.fr/12202121/paqueta-perform-vision.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DiEvo}
              isBlog={false}
              title="Di Evoluzion"
              description="Un autre projet réalisé dans le cadre d'un projet à l'IUT. 
              Les consignes étaient de reprendre un projet déjà existant et de l'améliorer. On devait corriger les erreurs et ajouter des fonctionnalités."
              ghLink="https://gitlab.sorbonne-paris-nord.fr/maelstrom/sae_maelstrom.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soleilex}
              isBlog={false}
              title="Soleilex"
              description="Voici le projet que j'ai réalisé lors de mon stage de 2 mois en JavaScript et en React. 
              C'est une entreprise qui vend des panneaux solaires aux clients et mon travail était de réaliser une page FAQ dans leur site qui répond à plus de 50 questions pour les clients. 
              Tous les thèmes importants y sont abordés tel que l'entreprise en elle-même, les panneaux solaires, les aides disponibles etc... "
              demoLink="https://soleilex.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fan2Foot}
              isBlog={false}
              title="Fan2Foot"
              description="Mon tout premier projet réalisé en solitaire. On devait réaliser un site sur le thème de notre choix et on avait quelques consignes à suivre. On devait par exemple utiliser obligatoirement Boostrap. C'est aussi précisément lors de ce projet que j'ai utilisé pour la première fois JavaScript. "
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
