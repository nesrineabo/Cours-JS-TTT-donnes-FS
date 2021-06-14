// Rappel des types de données
let string = "chaine de caractère";
let number = 25; //sans guillemets
let boolean = true; // ou false
let maVariable; // ca donne le type undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"]; // on a un array de 3 éléments

// console.log(array[0]); // on affiche le 1er élément du tableau
// console.log(array[0][3]); // on affiche la lettre "d" de Bordeaux

// autre type de tableau
let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

//console.log(array2[4].nom); // à chaque fois qu'on se balade dans les données on utilise le "." pareil pour les objets !
// un objet c'est => index: valeur
let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// si on veut ajouter une valeur à mon objet ou écraser une valeur d'un index
// objet.adresse = "22 rue du code";

// console.log(objet);
let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[2].pseudo);

//---------------------------
// Les structures de controle
//---------------------------
// if et else

if (data[0].age > data[1].age) {
  //console.log(data[0].pseudo + " est plus âgé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// While  (tant que) un peu moins utilisé
let w = 0;

while (w < 20) {
  w++;
  //console.log("la valeur de w est de : " + w);
}

// Do While (pas très utilisé)
let d = 0;

do {
  d++;
  //console.log(d);
} while (d < 5);

// les boucles for // for (nom d'une variable)
for (const user of data) {
  //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

//autre boucle for i = 0 / on déclare la valeur de i / on dit jusqu'où on boucle / comment i évolue entre chaque boucle si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  //console.log(i);
  console.log(data[i].technos[0]);
}
