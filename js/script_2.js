function numberToFact() {
  let number = Number(prompt("De quel nombre veux-tu calculer la factorielle ?"));
  let result = number;

  if (number === 0 || number === 1) {
    console.log(1);
  } else {
    while  (number > 1) {
      number--;
      result = result * number;
    }
    console.log(`Le resultat est ${result}`);
  }
}

numberToFact()