function talkWithBot() {
  let phrase = prompt('Discute avec RobotBoy !')

  if(phrase.includes('?')) {
    console.log("Ouais Ouais...");
  } else if(phrase.length > 1 && phrase === phrase.toUpperCase()) {
    console.log("Pwa, calme-toi...");
  } else if(phrase.includes('Fortnite')) {
    console.log("on s' fait une partie soum-soum ?");
  } else if (phrase === "") {
    console.log("t'es en PLS ?");
  } else {
    console.log("balek.");
  }
}

talkWithBot()