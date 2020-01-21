//Colores en la paleta
let nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Start--CODIGO JUAN

//Variables principales que invocan al DOM
let coloresPaleta = document.getElementById('paleta');
let grillaPixelada = document.getElementById('grilla-pixeles');
let pincel = document.getElementById("indicador-de-color");
let colorPersonalizado = document.getElementById("color-personalizado");

//Armado de paleta de colores
function recorroPaleta() {
  for (let i = 0; i < nombreColores.length; i++) {
     let color = document.createElement("div");
     color.className = ("color-paleta");
     color.style.backgroundColor = (nombreColores[i]);
     coloresPaleta.appendChild(color);
  }
}

//Armado de grilla de pixeles
function armoGrilla() {
  for (let i = 0; i < 1750; i++) {
     let pixel = document.createElement("div");
     //pixel.className = ("grilla-pixeles");
     grillaPixelada.appendChild(pixel);
  }
}

//Cambio de color el pincel
coloresPaleta.addEventListener("click", cambiarPincel);

function cambiarPincel(e) {
    pincel.style.backgroundColor = e.target.style.backgroundColor;
}

//Pinto un pixel con color seleccionado
grillaPixelada.addEventListener("click", pintar);

function pintar(e) {
  e.target.style.backgroundColor = pincel.style.backgroundColor;
}

// Es decir, el que se elige con la rueda de color.
colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    pincel.style.backgroundColor = colorActual;
  })
);

//Acciones con el mouse 
let mousePresionado = false;
grillaPixelada.addEventListener("mousedown", presionar);
grillaPixelada.addEventListener("mouseup", soltar);
grillaPixelada.addEventListener("mouseover", mover);

function presionar(e) {
  mousePresionado = true;
  //console.log(mousePresionado);
}

function soltar(e) {
  mousePresionado = false;
  //console.log(mousePresionado);
}

function mover(e) {
  if(mousePresionado) {
    pintar(e);
    //console.log(mousePresionado);
  }
}

// Borrar pantalla con desvanecido a blanco
  $("#borrar").click(function() {
    let $borrarPixeles = $("#grilla-pixeles div").animate({"background-color": "#ffffff"}, 2500);
    });

//Pintar Superheroes
$("#batman").click(function() {
  cargarSuperheroe(batman);
});

$("#wonder").click(function() {
  cargarSuperheroe(wonder);
});

$("#flash").click(function() {
  cargarSuperheroe(flash);
});

$("#invisible").click(function() {
  cargarSuperheroe(invisible);
});

//Descargar archivo.png
$("#guardar").click(function() {
  guardarPixelArt();
});

//Muestro las funciones en pantalla al iniciar el programa
window.onload = function () {
  armoGrilla();
  recorroPaleta();
  }