// Apparement, cette technique c'est pour les vieux. (tend à être déprécié)
// Idéalement, on favorise les module ("import" et non les "requires")
// const readline = require("node:readline");
// const { stdin: input, stdout: output } = require("node:process");

// Node = boite à outil
// Module = outil
// readline = module

// Read (input) : lit une entrée utilisateur
// Eval (traintement) : évalue l'entrée comme du code JS
// Print (output) : affiche le résultat
// Loop : attends la prochaine entrée

// Façon module (.mjs)
// Readline est un des nombreux module de node.
// il sert à lire les lignes entrantes du terminal. (Ce que vous écrivez)
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const arrAnswer = [];

const rl = readline.createInterface({ input, output });

const answer = await rl.question("What do you think of Node.js? ");
arrAnswer.push(answer);

const answerTwo = await rl.question("What do you think REALLY of Node.js? ");
arrAnswer.push(answerTwo);

for (const element of arrAnswer) {
  console.log(element);
}

rl.close();
