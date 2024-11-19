export function testFn(nombre) {
  // Déclarez en dessous :
  let texte = "";
  if (typeof nombre != "number") {
    texte = "Pas un nombre";
  } else {
    for (let i = nombre; i < nombre + 5; i++) {
      if (i === nombre + 2) { // au cas où 55 + 2 = 57 donc ignore 57
        continue;
      } else {
        texte += i;
      }
    }
  }

  return texte;
}

