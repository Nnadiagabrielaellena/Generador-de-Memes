function $(selector) {
      return document.querySelector(selector);
}

//----------url------------//
const $url = document.querySelector("#url");
const $imgMeme = document.querySelector("#imgMeme");

$url.addEventListener("input", () => {
      $imgMeme.innerHTML = `<img src="${$url.value}" >`
})
//------COLOR FONDO------------------//
const $fondo = $("#fondo")
const $fondo1 = $("#fondo1")


$fondo1.addEventListener("input",()=>{
      $imgMeme.style.backgroundColor = $fondo1.value;

})

/*---------FILTROS--------------*/

$fondo.addEventListener("change", () => {
      const $filtrovalor = $fondo.value

      switch ($filtrovalor) {
            case "1": // Ninguno (sin filtro)
                  $imgMeme.style.filter = "none";
                  
                  break;
            case "1.5": // Aclarar
                  $imgMeme.style.filter = "brightness(1.5)";
                 
                  break;
            case "0.5": // Oscurecer
                  $imgMeme.style.filter = "brightness(0.5)";

                  break;
            case "difference":

                  $imgMeme.style.mixBlendMode = "difference";
                  break;
            case "luminosity":
                 
                  $imgMeme.style.mixBlendMode = "luminosity"; 
                  break;
            case "multiply":
                  
                  $imgMeme.style.mixBlendMode = "multiply"; 
                  break;
            default:
                  $imgMeme.style.filter = "none";
                  $imgMeme.style.mixBlendMode = "normal"; 
      }
});


//----------FILTYROS----------------------//
const $brillo =$("#brillo");
const $contraste = $("#contraste")
const $desenfoque = $("#desenfoque")
const $grises = $("#grises")
const $sepia = $("#sepia")
const $hue = $("#hue")
const $saturado =$("#saturado")
const $negative =$("#negative")


$brillo.addEventListener("change", () => {
      $imgMeme.style.filter = `brightness(${$brillo.value})`;
});


$contraste.addEventListener("change", () => {
      $imgMeme.style.filter = `contrast(${$contraste.value}%)`
})
$desenfoque.addEventListener("change", () => {
      $imgMeme.style.filter = `blur(${$desenfoque.value}px)`
})
$grises.addEventListener("change", () => {
      $imgMeme.style.filter = `grayscale(${$grises.value}%)`
})
$sepia.addEventListener("change", () => {
      $imgMeme.style.filter = `sepia(${$sepia.value}%)`
})
$hue.addEventListener("change", () => {
      $imgMeme.style.filter = `hue-rotate(${$hue.value}deg)`
})
$saturado.addEventListener("change", () => {
      $imgMeme.style.filter = `saturate(${$saturado.value}%)`
})
$negative.addEventListener("change", () => {
      $imgMeme.style.filter = `invert(${$negative.value})`
})

/*-------------restablecer--------------------*/
const $reestablecerV= $("#reestablecerV")

function reestablecerValores (){
      $url.value = "";
      $imgMeme.value ="";
      $fondo.value ="0";
      $fondo1.value= "0";
      $brillo.value ="0"
       $brillo.value ="0";
       $contraste.value ="0";
      $desenfoque.value ="0";
       $grises.value ="0"; 
       $sepia.value ="0"; 
       $hue.value ="0";
       $saturado.value ="0"; 
      $negative.value ="0"; 
      

}

reestablecerValores()
$reestablecerV.addEventListener("click",reestablecerValores)





//------aside -texto superior---------//
const $topText = $("#top-tex");
const $topTextMain = $("#topTextMain");
const $sinTextoSuperior = $("#sinTextoSuperior")

$topText.addEventListener("input", (e) => {
      $topTextMain.innerText = e.target.value;

})
$sinTextoSuperior.addEventListener("change", () => {
      if ($sinTextoSuperior.checked) {
            $topTextMain.style.color = "transparent";
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
            $textoInferiorMain.style.color = "transparent";
      } else {
            $textoInferiorMain.style.color = "black"
      };
})
/*-----FUENTE--------*/
const $seleccionFuente = $("#seleccionFuente");
const $textSuperiorInferior = [$topTextMain, $textoInferiorMain];

const $arial = $("#arial")
const $arialBlack = $("#arialBlack");
const $AmericanTypewriter = $("#AmericanTypewriter")

$seleccionFuente.addEventListener("change", function () {
      const $seleccionFuenteValue = $seleccionFuente.value;

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
const $alineacionCentral = $("#alineacionCentral");
const $alineacionDerecha = $("#alineacionDerecha")
const $textoSuperiorInferior = [$topTextMain, $textoInferiorMain]

$alineacionIzq.addEventListener("click", () => {
      $topTextMain.style.justifyContent = "start";
      $textoInferiorMain.style.justifyContent = "start";
})
$alineacionCentral.addEventListener("click", () => {
      $topTextMain.style.justifyContent = "center";
      $textoInferiorMain.style.justifyContent = "center";
})
$alineacionDerecha.addEventListener("click", () => {
      $topTextMain.style.justifyContent = "end";
      $textoInferiorMain.style.justifyContent = "end";
})

/*----------color fuente------------*/
const $color = $("#color");
const $colorFondo = $("#colorFondo")


$color.addEventListener("input", () => {

      $topTextMain.style.color = $color.value;
      $textoInferiorMain.style.color = $color.value;
})

$colorFondo.addEventListener("input", () => {
      $topTextMain.style.backgroundColor = $colorFondo.value;
      $textoInferiorMain.style.backgroundColor = $colorFondo.value;

})
/*------------transparente------*/
const $transparente = $("#transparente");
$transparente.addEventListener("change", () => {
      $topTextMain.style.backgroundColor = "transparent";
      $textoInferiorMain.style.backgroundColor = "transparent";
})
/*----------CONTORNO TEXTO-------------*/
const $contornoNinguno = $("#contornoNinguno");
const $contornoClaro = $("#contornoClaro");
const $contornoOscuro = $("#contornoOscuro")

$contornoNinguno.addEventListener("click", () => {
      $topTextMain.style.textShadow = "none";
      $textoInferiorMain.style.textShadow = "none";
})

$contornoClaro.addEventListener("click", () => {
      $topTextMain.style.textShadow = "2px 2px 5px white";
      $textoInferiorMain.style.textShadow = "2px 2px 5px white";
})
$contornoOscuro.addEventListener("click", () => {
      $topTextMain.style.textShadow = "2px 2px 5px black";
      $textoInferiorMain.style.textShadow = "2px 2px 5px black";


})
/*---------ESPACIADO------------*/
const $espaciado = $("#espaciado");

$espaciado.addEventListener("input", () => {

      $topTextMain.style.paddingTop = `${$espaciado.value}px`;
      $textoInferiorMain.style.paddingTop = `${$espaciado.value}px`;

})
/*---------INTELINEADO-----------*/
const $interlineado = $("#interlineado");
const $opcion1 = $("#opcion1")

$interlineado.addEventListener("change", () => {
      const $interlineadoValue = $interlineado.val();
      if ($interlineadoValue) {
            $textoInferiorMain.style.lineHeight = $interlineadoValue;

      }




})

/*-------RESTABLECER FILTROS------*/
const $restablecer = $("#restablecer");
const $body = $("#body")

$restablecer.addEventListener("click", () => {
      $body.value = ""
})
/*------clase----*/

const $descargar = $("#descargar")

$descargar.addEventListener("click", () => {
      domtoimage.toBlob($imgMeme).then((blob) => {
            saveAs(blob, "my-meme.png");
      });

})

//--})-----------//

