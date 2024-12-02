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



