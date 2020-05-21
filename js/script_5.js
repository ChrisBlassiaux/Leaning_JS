const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function wasRented(books) {
  for(let index in books) {
    if((books[index].rented) === 0) {
      console.log('Non');
    } else {
      console.log('Oui');
    }
  }
}

function mostRented(books) {
  let arrayRented = [];

  for(let index in books) {
    arrayRented.push(books[index].rented);
  }
  let mostRented = arrayRented.sort().reverse()[0];
  let mostBookRented = books.find( book => book.rented == mostRented)
  console.log(mostBookRented);
}

function lessRented(books) {
  let arrayRented = [];

  for(let index in books) {
    arrayRented.push(books[index].rented);
  }
  let lessRented = arrayRented.sort()[0];
  let lessBookRented = books.find( book => book.rented == lessRented)
  console.log(lessBookRented);
}

function findId(books) {
  let idFind = books.find(book => book.id === 873495);
  console.log(idFind);
}

function deleteBook(books) {
  let findBook = books.findIndex(book => book.id === 133712)
  books.splice(findBook, 1);
  console.log(books)
}

function sortBooks(books) {
  
}

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
wasRented(books);

console.log("Quel est le livre le plus emprunté ?");
mostRented(books);

console.log("Quel est le livre le moins emprunté ?");
lessRented(books);

console.log("Trouve le livre avec l'ID: 873495");
findId(books);

console.log("Supprime le livre avec l'ID: 133712");
deleteBook(books);

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
sortBooks(books);