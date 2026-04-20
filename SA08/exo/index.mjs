//❗Tout se fait dans le même fichier❗//

// 🟩 OBJECTIF A
// 1. Créer un fichier index.mjs
// 2. Ajoute console.log("Hello World!")
// 3. Executer le fichier avec Node.js :
// - Ouvrir un terminal
// - Se positionner à la racine du dossier qui contient notre fichier index.mjs
// - executer la commande : node index.mjs
// ➡️ Si "Hello World" s'affiche, alors notre configuration est bonne !

console.log("Hello world !");



//  🟩 OBJECTIF B
// 1. Créer un tableau "data" et ajouer 3 objets (vide pour l'instant)
// 2. Chaque objet sera constitué d'un (pays), sa (capitale) et le nombre d'(habitants)
// - France, Paris, 68000000
// - Japon, Tokyo, 124000000
// - Brésil, Brasília, 203000000
// console.log() le tableau, puis.. executer node index.mjs dans le terminal
// ➡️ Si le tableau s'affiche alors... Go la suite !

const data = [
    {pays: "France", capital: "Paris", habitants: 68000000},
    {pays: "Japon", capital: "Tokyo", habitants: 124000000},
    {pays: "Brésil", capital: "Brasília", habitants: 203000000}
];
console.log(data);





// 🟩 OBJECTIF D
// 1. Créer un objet newCity et ajouter une ville
// - Canada, Ottawa, 41000000
// 2. Ajouter l'objet au tableau à l'aide de .push.
// 3. Executer la commande node index.mjs
// ➡️ Si la nouvelle ville est présent... On est bon !
const newCity = {pays: "Canada", capital: "Ottawa", habitants: 41000000};

data.push(newCity);

// 🟩 OBJECTIF C
// 1. Créer une boucle pour afficher (console.log) tous les elements de notre tableau
// - Prend la boucle de ton choix ! (forof, forEach, while, for ou autre !)
// 2. Executer la commande node index.mjs
// ➡️ Si nos elements s'affichent à la suite... On est bon !
// data.forEach((element) => {}); -> console.log(element);
// Avec une boucle .forEach
// data.forEach((element) => {
//   console.log(`${element.capitale} est la capitale de ${element.pays}. Il y a ${element.habitants} habitans`);
// });
// boucle WHILE
// let n = 0;
// while (n < data.length) {
//   console.log(`${data[n].capitale} est la capitale de ${data[n].pays}. Il y a ${data[n].habitants} habitans`);
//   n++;
// }
// console.log(n);

for (const property of data) {
  console.log(`${property.capital} est le capital de ${property.pays}. Le nombre d'habitants est ${property.habitants}.`);
}

console.log(data);
