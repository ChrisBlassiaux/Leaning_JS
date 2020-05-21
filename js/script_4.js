const entrepreneurs = [
  { first: 'Steve', last  : 'Jobs', year      : 1955 },
  { first: 'Oprah', last  : 'Winfrey', year   : 1954 },
  { first: 'Bill', last   : 'Gates', year     : 1955 },
  { first: 'Sheryl', last : 'Sandberg', year  : 1969 },
  { first: 'Mark', last   : 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year   : 1981 },
  { first: 'Jeff', last   : 'Bezos', year     : 1964 },
  { first: 'Diane', last  : 'Hendricks', year : 1947 },
  { first: 'Elon', last   : 'Musk', year      : 1971 },
  { first: 'Marissa', last: 'Mayer', year     : 1975 },
  { first: 'Walt', last   : 'Disney', year    : 1901 },
  { first: 'Larry', last  : 'Page', year      : 1973 },
  { first: 'Jack', last   : 'Dorsey', year    : 1976 },
  { first: 'Evan', last   : 'Spiegel', year   : 1990 },
  { first: 'Brian', last  : 'Chesky', year    : 1981 },
  { first: 'Travis', last : 'Kalanick', year  : 1976 },
  { first: 'Marc', last   : 'Andreessen', year: 1971 },
  { first: 'Peter', last  : 'Thiel', year     : 1967 }
];

function filterByYear(entrepreneursArray) {
  let entrepreneursYear70 = [];

  // parcourir le Array
  for(let index in entrepreneursArray) {
    // Si l'attribut qui est dans l'objet est entre 1970 et 1980
    if(entrepreneursArray[index].year >= 1970 && entrepreneursArray[index].year < 1980) {
      entrepreneursYear70.push(entrepreneursArray[index]);
    }
  }
  // Affichage
  console.log(entrepreneursYear70);
}

function filterFullName(entrepreneursArray) {
  let entrepreneursFullName = [];

  // parcourir le Array
  for(let index in entrepreneursArray) {
    entrepreneursFullName.push(entrepreneursArray[index].last + " " + entrepreneursArray[index].first);
  }
  // Affichage
  console.log(entrepreneursFullName);
  return entrepreneursFullName
}

function ageToday(entrepreneursArray) {
  for(let index in entrepreneursArray) {
    console.log(entrepreneursArray[index].first + " " + entrepreneursArray[index].last + ` aurait ${2020 - entrepreneursArray[index].year} ans aujourd'hui.`);
  }
}

function lastNameSort(entrepreneursArray) {
  console.log(filterFullName(entrepreneursArray).sort());
}

console.log('Les noms et prénom des entrepreneurs :');
filterByYear(entrepreneurs);
console.log('Les noms et prénom des entrepreneurs :');
filterFullName(entrepreneurs);
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
ageToday(entrepreneurs);
console.log("Les entrepreneurs trié par ordre alphabétique du nom de famille :")
lastNameSort(entrepreneurs);





