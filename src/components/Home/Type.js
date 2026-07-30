import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Engineer",
          "Ingénieur Full-Stack",
          "Python / SQL / DataBricks",
          "2 ans d'alternance chez Ingram MICRO",
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
