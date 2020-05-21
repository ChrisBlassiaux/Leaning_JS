function tranformToAcideAmine(arn) {
  //transformer l'ARN en "UUA-CGC-AGU-AGA" mettre dans un array 
  //parcourir le tableau et utiliser les cases pour si ça modifier l'element du tableau par ça
  // .join('-') les elements du tableai 
  let arrayArn = []

  arrayArn.push(arn.slice(0, 3));
  arrayArn.push(arn.slice(3, 6));
  arrayArn.push(arn.slice(6, 9));
  arrayArn.push(arn.slice(9, 12));
  arrayArn.push(arn.slice(12, 15));
  arrayArn.push(arn.slice(15, 18));

  let acideAmine = []

  for(let index in arrayArn) {

    if(arrayArn[index] === 'UCU' || arrayArn[index] === 'UCC' || arrayArn[index] === 'UCA' || arrayArn[index] === 'AGU' || arrayArn[index] === 'AGC') {
      acideAmine.push('Sérine');
    } else if(arrayArn[index] === 'CCU' || arrayArn[index] === 'CCC' || arrayArn[index] === 'CCA' || arrayArn[index] === 'CCG') {
      acideAmine.push('Proline');
    } else if(arrayArn[index] === 'UUA' || arrayArn[index] === 'UUG') {
      acideAmine.push('Leucine');
    } else if(arrayArn[index] === 'UUU' || arrayArn[index] === 'UUC') {
      acideAmine.push('Phénylalanine');
    } else if(arrayArn[index] === 'CGU' || arrayArn[index] === 'CGC' || arrayArn[index] === 'CGA' || arrayArn[index] === 'CGG' || arrayArn[index] === 'AGA' || arrayArn[index] === 'AGG') {
      acideAmine.push('Arginine');
    } else if(arrayArn[index] === 'UAU' || arrayArn[index] === 'UAC') {
      acideAmine.push('Tyrosine');
    }

  }
  console.log(acideAmine.join('-'));
}


tranformToAcideAmine('CCGUCGUUGCGCUACAGC');
tranformToAcideAmine('CCUCGCCGGUACUUCUCG');