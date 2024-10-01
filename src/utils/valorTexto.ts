const unidades = ["", "UN", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE"];
const decenas = ["", "DIEZ", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA"];
const especiales = ["DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISÉIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE"];
const centenas = ["", "CIEN", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS"];
const especialesMillones = ["", "UN MILLÓN", "DOS MILLONES", "TRES MILLONES", "CUATRO MILLONES", "CINCO MILLONES", "SEIS MILLONES", "SIETE MILLONES", "OCHO MILLONES", "NUEVE MILLONES", "DIEZ MILLONES", "ONCE MILLONES", "DOCE MILLONES", "TRECE MILLONES", "CATORCE MILLONES", "QUINCE MILLONES", "DIECISÉIS MILLONES", "DIECISIETE MILLONES", "DIECIOCHO MILLONES", "DIECINUEVE MILLONES", "VEINTE MILLONES"];

export function convertirNumeroATexto(numero: number): string {
  if (numero === 0) return "CERO PESOS M/Cte";

  if (numero <= 20000000) {
    return convertirMillones(numero);
  }

  return "Número fuera del rango soportado";
}

function convertirMillones(numero: number): string {
  const millones = Math.floor(numero / 1000000);
  const restoMillones = numero % 1000000;
  
  let texto = `${especialesMillones[millones]} `;
  
  if (restoMillones > 0) {
    texto += convertirMiles(restoMillones);
  }

  texto += "PESOS M/Cte";
  return texto.trim();
}

function convertirMiles(numero: number): string {
  const miles = Math.floor(numero / 1000);
  const restoMiles = numero % 1000;
  let texto = "";

  if (miles >= 10 && miles <= 19) {
    texto += `${especiales[miles]} MIL `;
  } else if (miles > 0) {
    texto += `${convertirGrupo(miles)} MIL `;
  }

  if (restoMiles > 0) {
    texto += convertirGrupo(restoMiles);
  }

  return texto.trim();
}

function convertirGrupo(numero: number): string {
  if (numero === 100) return "CIEN";
  
  const cent = Math.floor(numero / 100);
  const restoCent = numero % 100;
  console.log(restoCent)
  const dec = Math.floor(restoCent / 10);
  const uni = restoCent % 10;

  let texto = "";

  if (cent > 0) {
    texto += `${centenas[cent]} `;
  }

  if (restoCent >= 10 && restoCent <= 19) {
    if (restoCent == 11) {
        texto += "ONCE "
    } else if (restoCent == 12) {
        texto += "DOCE "
    } else if (restoCent == 13) {
        texto += "TRECE"
    } else if (restoCent == 14) {
        texto += "CATORCE "
    } else if (restoCent == 15) {
        texto += "QUINCE "
    } else if (restoCent == 16) {
        texto += "DIECISEIS "
    } else if (restoCent == 17) {
        texto += "DIECISIETE "
    } else if (restoCent == 18) {
        texto += "DIECIOCHO "
    } else if (restoCent == 19) {
        texto += "DIECINUEVE "
    } else {
        texto += `${especiales[restoCent]} `;
    }
  } else {
    if (dec > 0) {
      texto += `${decenas[dec]} `;
    }
    if (dec > 0 && uni > 0) {
      texto += `Y ${unidades[uni]} `;
    } else if (uni > 0) {
      texto += `${unidades[uni]} `;
    }
  }

  return texto.trim();
}
