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
 *    Referencia: https://javascript.info/array#loops

 * 2. En cada iteración:
 *
 *    Tome una cadena del arreglo y divídala en partes usando el separador "|".
 *    Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *   
 *    Extraiga los valores: nombre del framework, fecha de lanzamiento, número de usuarios y porcentaje de popularidad.
 *    Referencia: https://javascript.info/destructuring-assignment   
 * 
 *    Cree un objeto frameworkObj con las siguientes propiedades:
 *    - frameworkName
 *    - releaseDate
 *    - usersName
 *    - popularityPercentage
 *    Referencia: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects
 * 
 *    Asegúrese de eliminar los espacios en blanco alrededor de cada valor usando `.trim()`.
 *    Referencia: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 * 
 *    LlamE a la función addRow pasando el objeto frameworkObj y el ID del cuerpo de la tabla "data-frameworks",
 *    para agregar una nueva fila con estos datos al cuerpo de la tabla HTML.
 *
 * /** */
  for ( let f of frameworks ) {
      let [ frameworkName, releaseDate, usersName, popularityPercentage ] = f.split("|");
      let frameworkObj = {
       frameworkName: frameworkName.trim(),
       releaseDate: releaseDate.trim(),
      usersName: usersName.trim(),
     popularityPercentage: popularityPercentage.trim()
   };
   addRow(frameworkObj, "data-frameworks");
  }
 
