const fs = require("fs");

function leerArchivoComoString(nombre) {
  fs.readFile(nombre, "utf8", (err, data) => {
    if (err) {
      if (err) {
        console.error(err);
        return;
      }
    }
    console.log("Lectura realizada");
    console.log(data);
    return data;
  });
}
// leerArchivoComoString('archivo.txt')
var texto = leerArchivoComoString("archivo.txt");
console.log(texto);

function escribirTextoEnArchivo(nombreArchivo, texto, flag) {
  if (fs.existsSync(nombreArchivo) || flag) {
    fs.writeFile("archivo2.txt", texto, (err) => {
      if (err) {
        console.error(err);
      }
      console.log("se creo un archivo");
    });
  } else {
    console.log("ese archivo no existe :(");
  }
}

escribirTextoEnArchivo("archivo2.txt", "mira como escribo en el txt", true);
leerArchivoComoString("archivo2.txt");

function transformarStringEnArrayDeNumeros(texto, separador) {
  const array = texto.split(separador);
  let resultado = [];
  for (let item of array) {
    numero = Number(item);
    if (!isNaN(numero)) {
      resultado.push(numero);
    }
  }
  console.log(resultado);
}
texto = "123 | 456 | 789 | 1bc | 10";
transformarStringEnArrayDeNumeros(texto, "|");

function transformarArrayDeNumerosAUnSoloString(array, separador) {
  var res = "";
  for (let x = 0; x < array.length; x++) {
    res = res + array[x];
    if (x != array.length - 1) {
      res = res + separador;
    }
  }

  console.log(res);
}

transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], "|");


function combinarDosArrays(primer_array, segundo_array) {
    const tercer_array = [...primer_array, ...segundo_array];

    var res = []

    for (let x of tercer_array){
        if (!res.includes(x)){
            res.push(x)
        }
    }

    return res.sort((a, b) => a - b);
  }
  

const primer_array = [1, 5, 10];
const segundo_array = [2, 3, 8, 11];
var res = combinarDosArrays(primer_array, segundo_array);
console.log(res); 



function combinarNArrays(array){
    var flat = array.flat()
    var res = []

    for (let x of flat){
        if (!res.includes(x)){
            res.push(x)
        }
    }

    return res.sort((a, b) => a - b);
}

combinado = combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]])
console.log(combinado)