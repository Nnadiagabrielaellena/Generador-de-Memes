function $(selector) {
      return document.querySelector(selector);
}

//----------url------------//
const $url = document.querySelector("#url");
const $imgMeme = document.querySelector("#imgMeme");

$url.addEventListener("input", () => {
      $imgMeme.innerHTML = `<img src="${$url.value}" >`
})

const $fondo = document.querySelector("#fondo");

$fondo.addEventListener("input", () => {
      $imgMeme.style.backgroundColor = `#${$fondo.value}`

})

const $brillo = document.querySelector("#brillo");


$brillo.addEventListener = ("input", () => {
      $url.style.filter = "brightness(${$brillo.value})";
});

const $contraste = $("#contraste");
$contraste.addEventListener("input", () => {
      $url.style.filter = `constrast(${$conntraste.value})`
})
//------aside -texto superior---------//
const $topText = $("#top-tex");
const $topTextMain = $("#topTextMain");
const $sinTextoSuperior = $("#sinTextoSuperior")

$topText.addEventListener("input", (e) => {
      $topTextMain.innerText = e.target.value;

})
$sinTextoSuperior.addEventListener("change", () => {
      if ($sinTextoSuperior.checked) {
            $topTextMain.style.color = "transparent"
      } else {
            $topTextMain.style.color = "black"
      };
})
//---------aside.texto.infeior------------//
const $textoInferior = $("#textoInferior");
const $textoInferiorMain = $("#topText");
const $sinTextoInferior = $("#sinTextoInferior");

$textoInferior.addEventListener("input", (e) => {
      $textoInferiorMain.innerText = e.target.value
})
$sinTextoInferior.addEventListener("change", () => {
      if ($sinTextoInferior.checked) {
            $textoInferiorMain.style.color = "transparent"
      } else {
            $textoInferiorMain.style.color = "black"
      };
})
/*-----FUENTE--------*/
const $seleccionFuente = $("#seleccionFuente");
const $textSuperiorInferior = [$topTextMain,$textoInferiorMain];

const $arial = $("#arial")
const $arialBlack = $("#arialBlack");
const $AmericanTypewriter = $("#AmericanTypewriter")

$seleccionFuente.addEventListener("change", function () {
      const $seleccionFuenteValue = $seleccionFuente.value ;

      switch ($seleccionFuenteValue) {
            case "$arial":
                  $topTextMain.style.fontFamily = "Arial";
                  break;

            case "$arialBlack.value":
                  
            applyFontFamily("Arial Black, sans-serif");
                  break;

            

            
      }
})
//$topTextMain.style.color ="red"

/*-------TAMANO-----------*/
const $tamano = $("#tamano");

$tamano.addEventListener("click", () => {
      $topTextMain.style.fontSize = `${$tamano.value}px`;
      $textoInferiorMain.style.fontSize = `${$tamano.value}px`;
      // $topTextMain.style.color = "red";
})

/*----------ALINEACION-----------*/
const $alineacionIzq = $("#alineacionIzq");
const $alineacionCentral =$("#alineacionCentral");
const $alineacionDerecha =$("#alineacionDerecha")
const $textoSuperiorInferior = [$topTextMain, $textoInferiorMain]

$alineacionIzq.addEventListener("click",()=>{
      $topTextMain.style.justifyContent= "start";
      $textoInferiorMain.style.justifyContent= "start";
})
$alineacionCentral.addEventListener("click",()=>{
      $topTextMain.style.justifyContent= "center";
      $textoInferiorMain.style.justifyContent= "center";
})
$alineacionDerecha.addEventListener("click",()=>{
      $topTextMain.style.justifyContent= "end";
      $textoInferiorMain.style.justifyContent= "end";
})

/*----------color fuente------------*/
const $color = $("#color");
const $colorFondo =$("#colorFondo")


$color.addEventListener("input",()=>{
     
      $topTextMain.style.color = $color.value;
      $textoInferiorMain.style.color = $color.value;
})

$colorFondo.addEventListener("input",()=>{
      $topTextMain.style.backgroundColor = $colorFondo.value;
      $textoInferiorMain.style.backgroundColor = $colorFondo.value;

})
/*------------transparente------*/
const $transparente = $("#transparente");
$transparente.addEventListener("change",()=> {
      $topTextMain.style.backgroundColor = "transparent";
      $textoInferiorMain.style.backgroundColor = "transparent";
})
/*----------CONTORNO TEXTO-------------*/
const $contornoNinguno =$("#contornoNinguno");
const $contornoClaro = $("#contornoClaro");
const $contornoOscuro = $("#contornoOscuro")

$contornoNinguno.addEventListener("click",()=>{
      $topTextMain.style.textShadow = "none";
      $textoInferiorMain.style.textShadow = "none"; 
})

$contornoClaro.addEventListener("click",()=>{
      $topTextMain.style.textShadow = "2px 2px 5px white";
      $textoInferiorMain.style.textShadow = "2px 2px 5px white";
})
$contornoOscuro.addEventListener("click",()=>{
      $topTextMain.style.textShadow = "2px 2px 5px black";
      $textoInferiorMain.style.textShadow = "2px 2px 5px black";


})







