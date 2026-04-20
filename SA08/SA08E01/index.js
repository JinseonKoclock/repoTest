// ===================================================================== //
// Petit exercice en autonomie //
// ===================================================================== //

// 1. Créer un objet avec votre nom, nom de famille et votre age en clef
// 2. console.log l'objet créé
// 3. Lire le fichier avec node. ( Terminal -> node index.js)


// const firstName = "Jinseon";
// const lastName = "KIM";
// const myAge = 44;

// const firstName = "jinseon", lastName = "KIM", myAge = 44;
// console.log(firstName, lastName, myAge);

const me = {
    firstName : "Jinseon",
    lastName : "KIM",
    myAge : 44
};

console.log(me);
console.log(me.firstName);

for(const key in me){
    console.log(me[key]);
};

