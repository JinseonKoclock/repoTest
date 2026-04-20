// "line" est un type d'evenement : https://nodejs.org/docs/latest/api/readline.html#readline_event_line
// line se déclanche à chaque fois qu'un.e utilisateur.rice appui sur entrée (du clavier) dans le terminal.
// "on" = addEventListener côté back (node)
// "on" a besoin d'un type "d'event" et d'un callback

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const answers = [];

const psy = readline.createInterface({ input, output });
const test = readline.createInterface({ input, output });

console.log("Bonjour, je suis votre psy virtuel. Parlez-moi de vous");

// "line" est un type d'evenement : https://nodejs.org/docs/latest/api/readline.html#readline_event_line
// line se déclanche à chaque fois qu'un.e utilisateur.rice appui sur entrée (du clavier) dans le terminal.
// "on" = addEventListener côté back (node)
// "on" a besoin d'un type "d'event" et d'un callback

psy.on("line", (answer) => {
  answers.push(answer);
  console.log("Mouais... Pas mal. Continuez je vous en prie");
});

test.on("line", (answer) => {
  if (answer === "oui") {
    console.log("ok cool");
  }
});

// "close est un event qui s'execute au moment de la fermeture de notre instance / interface
psy.on("close", () => {
  if (answers.length === 0) {
    console.log("Vous pouvez pleurer, ça fera quand même 80€");
  } else {
    // On liste les réponses avec un for of
    for (const element of answers) {
      console.log(element);
    }

    // Boucle avec .forEach (a utilisé exclusivement sur des tableaux)
    //   answers.forEach((answer) => {
    //     console.log(answer);
    //   });
  }
});
