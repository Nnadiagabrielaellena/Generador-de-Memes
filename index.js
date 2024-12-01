function $(selector){
      return document.querySelector(selector);
}

//----------url------------//
const $url = document.querySelector("#url");
const $imgMeme = document.querySelector("#imgMeme");

$url.addEventListener("input",()=>{
      $imgMeme.innerHTML = `<img src="${$url.value}" >`
})

const $fondo = document.querySelector("#fondo");

$fondo.addEventListener("input",()=>{
      $imgMeme.style.backgroundColor =`#${$fondo.value}`

})

const $brillo = document.querySelector("#brillo");


$brillo.addEventListener =("input",()=>{
      $url.style.filter ="brightness(${$brillo.value})";
});

const $contraste= $("#contraste");
$contraste.addEventListener("input",()=>{
      $url.style.filter=`constrast(${$conntraste.value})`
})
 

