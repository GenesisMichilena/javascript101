"use strict";

import { addRow } from "./functions.js";

const frameworks = [
  "Flowbite|25 de septiembre de 2021|269,000|49%",
  "React|24 de mayo de 2013|4,500,000|24%",
  "Angular|20 de septiembre de 2010|2,800,000|17%",
  "Vue|2 de diciembre de 2014|3,600,000|30%",
  "Svelte|26 de noviembre de 2016|1,200,000|57%",
  "Inferno|27 de septiembre de 2016|100,000|35%",
  "Preact|16 de agosto de 2015|600,000|28%",
  "Lit|28 de mayo de 2018|400,000|60%",
  "Alpine.js|2 de noviembre de 2019|300,000|70%",
  "Stimulus|6 de marzo de 2018|150,000|25%",
  "Solid|5 de julio de 2021|250,000|80%"
];

/**
 * TO-DO:
 *
 * 1. Itere el arreglo frameworks.
 * 2. En cada iteración:
 * Tome una cadena del arreglo y divídala en partes usando el separador "|".
 * Extraiga los valores: nombre del framework, fecha de lanzamiento, número de usuarios y porcentaje de popularidad.
 * Cree un objeto frameworkObj con las propiedades: frameworkName, releaseDate, usersName, popularityPercentage.
 * Asegúrese de eliminar los espacios en blanco alrededor de cada valor usando `.trim()`.
 * LlamE a la función addRow pasando el objeto frameworkObj y el ID del cuerpo de la tabla "data-frameworks".
 *
 * /** */
for (let f of frameworks) {
  // Divide la cadena usando el separador "|" y desestructura los valores
  let [frameworkName, releaseDate, usersName, popularityPercentage] = f.split("|");

  // Crea el objeto frameworkObj, aplicando .trim() a cada valor
  let frameworkObj = {
    frameworkName: frameworkName.trim(),
    releaseDate: releaseDate.trim(),
    usersName: usersName.trim(),
    popularityPercentage: popularityPercentage.trim()
  };

  // Llama a addRow con el objeto y el ID de la tabla
  addRow(frameworkObj, "data-frameworks");
}