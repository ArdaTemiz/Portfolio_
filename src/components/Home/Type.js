import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Full-Stack",
          "Angular / Java Spring Boot",
          "1 an d'alternance chez Ingram MICRO",
          "En recherche d'alternance 2026",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
