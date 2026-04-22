// 🔴 LES MODULES EXPORTES ICI SONT IMPORTES DANS LE FICHIER INDEX.MJS 🔴

// Ceci est un export nommé car il comporte nom.
// Si on souhaite importer cette variable dans un autre fichier
// Nous sommes obligé de spécifié l'export
export const maVariable = "Je suis la variable !";

// On peu faire la même chose avec les functions
export function itsMe(name) {
  console.log(`Salut c'est ${name} !`);
}

// Ici, je créer les ressources que je vais exporter par defaut
const name = "Florian";

function calcul(a, b) {
  console.log(a + b);
}

// J'exporte mes ressources par défaut
export default { name, calcul, tableau: ["Rouge", "Bleu", "Vert"] };

// On peut exporter par default ce qu'on veut
// String
// export default "Salut"

// Array
// export default []

// Number
// export default 15
