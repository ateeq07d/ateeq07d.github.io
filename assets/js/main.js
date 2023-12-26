import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".huntmetric",
  `I received real-time collaboration and invaluable guidance and support by the company. The knowledge and expertise I acquired were immensely helpful, and I recognize how essential their mentorship was in my development. Huntmetric Internship was an educational and rewarding experience.`,
  "Cyber Security",
  "HuntMetric",
  "Aug 2023 - Sept 2023 (1 month)"
);

// hoverChangeExperience(
//   ".zuplae",
//   `Trabalhei como Social Media e Designer na Zuplae que é um escola
//   de programação, onde teve como foco as criações de conteúdos sobre
//   programação para a comunidade dev através das redes sociais.`,
//   "Social Media e UI Designer",
//   "Zuplae",
//   "Jan 2022 - Abril 2022 (4 meses)"
// );

// hoverChangeExperience(
//   ".codigofontetv",
//   `Trabalhei como Social Media e Designer no Código Fonte TV,
//   onde teve como foco as criações de conteúdos sobre programação
//   para a comunidade dev através das redes sociais.`,
//   "Social Media e Designer",
//   "Código Fonte TV",
//   "Jun 2021 - Jan 2022 (8 meses)"
// );

// hoverChangeExperience(
//   ".contweb",
//   `Realizei o estágio na ContWeb, uma empresa de contabilidade.
//   Onde pela primeira vez tive experiência com o React. Além do
//   desenvolvimento frontend criei os designs da nova plataforma da empresa.`,
//   "Developer frontend e UI Designer",
//   "ContWeb",
//   "Set 2021 - Nov 2021 (3 meses)"
// );

hoverChangeDescription(
  ".html",
  "HTML is a markup language, where we mark elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a style sheet language made up of “layers”, created for the purpose of styling pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic elements on web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a CSS preprocessor that adds some features that are not available natively."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library focused on creating user interfaces in a componetized way."
);
hoverChangeDescription(
  ".next",
  "Next.js is a web framework that enables functionality such as server-side rendering and generating React-based static web sites."
);
// hoverChangeDescription(
//   ".styled",
//   "styled-components is a library that uses the concept of CSS-in-JS, that is, it allows us to write CSS codes within Javascript."
// );
// hoverChangeDescription(
//   ".tailwind",
//   "Tailwind CSS is a CSS framework that provides us with utility classes for the purpose of styling pages."
// );
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that includes features that are not natively present in the language, in addition to making it static."
);
// hoverChangeDescription(
//   ".radix",
//   "Radix is ​​a library that provides accessible, styleless components for creating React applications."
// );
hoverChangeDescription(
  ".cypress",
  "Cypress is a framework for end-to-end test automation, which currently uses the JavaScript language."
);
hoverChangeDescription(
  ".storybook",
  "Storybook is a tool that aims to document and test application components."
);
