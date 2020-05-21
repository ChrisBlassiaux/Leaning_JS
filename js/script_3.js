function pyramid() {

  let step = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));
  let hashTag = 1;

  if ((step >= 1) && (step <= 25)) {
    while (step > 0) {
      console.log(" ".repeat(step-1)+"#".repeat(hashTag)); 
      step--;
      hashTag++;
    }
  }
}

pyramid()