// On import l'export nommé (maVariable) du fichier module.mjs
import { maVariable, itsMe } from "./module.mjs";

// On import l'export default du fichier "./module.mjs"
// Les exports par defaut, n'ont pas de nom. On leur donne au moment de l'import (Dans notre cas, on l'appelle "expDefault")
import expDefault from "./module.mjs";

// Au même titre que les exports només, on peu destructurer cet objet pour récupérer les valeurs/clefs qu'il contient
const { calcul, name, tableau } = expDefault;

// ====================================================== //
// Utilisations des imports nommés
console.log(maVariable);
itsMe("Franck Leboeuf");

// ====================================================== //
// Utilisations des imports par défauts (destructuré)
calcul(5, 7);
console.log(name);
for (const color of tableau) {
  console.log(color);
}
