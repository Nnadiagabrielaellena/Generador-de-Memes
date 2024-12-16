window.onload = () => {
      const $body = $("body")
      const $aside = $("aside")
      const $main = $("main")
      const $ClaroOscuro = $("#ClaroOscuro")
      const $imagen = $("#imagen")
      const $asideImagen = $(".asideImagen")
      const $texto = $("#texto");
      const $asideTexto = $(".asideTexto")
      const $url = document.querySelector("#url");
      const $imgMeme = document.querySelector("#imgMeme");
      const $img = $("#img")
      const $fondo = $("#fondo")
      const $fondo1 = $("#fondo1")
      const $brillo = $("#brillo");
      const $contraste = $("#contraste")
      const $desenfoque = $("#desenfoque")
      const $grises = $("#grises")
      const $sepia = $("#sepia")
      const $hue = $("#hue")
      const $saturado = $("#saturado")
      const $negative = $("#negative")
      const $topText = $("#top-tex");
      const $topTextMain = $("#topTextMain");
      const $sinTextoSuperior = $("#sinTextoSuperior")
      const $textoInferior = $("#textoInferior");
      const $textoInferiorMain = $("#topText");
      const $sinTextoInferior = $("#sinTextoInferior");
      const $reestablecerV = $("#reestablecerV")
      const $seleccionFuente = $("#seleccionFuente");
      const $tamano = $("#tamano");
      const $alineacionIzq = $("#alineacionIzq");
      const $alineacionCentral = $("#alineacionCentral");
      const $alineacionDerecha = $("#alineacionDerecha")
      const $color = $("#color");
      const $colorFondo = $("#colorFondo")
      const $interlineado = $("#interlineado");
      const $transparente = $("#transparente");
      const $contornoNinguno = $("#contornoNinguno");
      const $contornoClaro = $("#contornoClaro");
      const $contornoOscuro = $("#contornoOscuro")
      const $espaciado = $("#espaciado");
      const $descargar = $("#descargar")
      const $canvasMeme = $(".canvasMeme")

      function $(selector) {
            return document.querySelector(selector);
      }
      function reestablecerValores() {
            $url.value = "";
            $imgMeme.value = "";
            $fondo.value = "0";
            $fondo1.value = "0";
            $brillo.value = "0"
            $brillo.value = "0";
            $imgMeme.style.filter = `brightness(1)`;
            $contraste.value = "0";
            $desenfoque.value = "0";
            $grises.value = "0";
            $sepia.value = "0";
            $hue.value = "0";
            $saturado.value = "0";
            $negative.value = "0";
      }
      reestablecerValores()

      $ClaroOscuro.addEventListener("click", () => {
            if ($body.classList.contains("modoOscuro")) {
                  $body.classList.add("modoClaro");
                  $body.classList.remove("modoOscuro")
                  $ClaroOscuro.innerText = "modo Oscuro"
            } else if ($body.classList.contains("modoClaro")) {
                  $body.classList.add("modoOscuro");
                  $body.classList.remove("modoClaro")
                  $ClaroOscuro.innerText = "modo Claro"
            }
            if ($asideTexto.classList.contains("modoOscuro")) {
                  $asideTexto.classList.add("modoClaro");
                  $asideTexto.classList.remove("modoOscuro")
            } else if ($asideTexto.classList.contains("modoClaro")) {
                  $asideTexto.classList.add("modoOscuro");
                  $asideTexto.classList.remove("modoClaro")
            }
            if ($asideImagen.classList.contains("modoOscuro")) {
                  $asideImagen.classList.add("modoClaro");
                  $asideImagen.classList.remove("modoOscuro")
            } else if ($asideImagen.classList.contains("modoClaro")) {
                  $asideImagen.classList.add("modoOscuro");
                  $asideImagen.classList.remove("modoClaro")
            }
      })
      $imagen.addEventListener("click", () => {
            $asideImagen.style.display = "flex";
            $asideTexto.style.display = "none"
      })
      $texto.addEventListener("click", () => {
            $asideTexto.style.display = "flex"
            $asideImagen.style.display = "none"

      })

      $url.addEventListener("input", () => {
            $img.src = $url.value;
            if (isNaN($url.value) === false || $url.value === "") {
                  alert('URL INCORRECTA')
            }
      })
      $fondo1.addEventListener("input", () => {
            $imgMeme.style.backgroundColor = $fondo1.value;

      })
      $fondo.addEventListener("change", () => {
            const $filtrovalor = $fondo.value

            switch ($filtrovalor) {
                  case "1":
                        $imgMeme.style.filter = "none";

                        break;
                  case "1.5":
                        $imgMeme.style.filter = "brightness(1.5)";

                        break;
                  case "0.5":
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
      /*--------------FILTROS-----------------*/
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

      /*FUNCION ACTUALIUZAR FILTRO---------*/
      function actualizarFiltros() {
            let filtros = '';


            if ($brillo.value !== '100') {
                  filtros += `brightness(${$brillo.value}) `;
            }
            if ($contraste.value !== '100') {
                  filtros += `contrast(${$contraste.value}%) `;
            }
            if ($desenfoque.value !== '0') {
                  filtros += `blur(${$desenfoque.value}px) `;
            }
            if ($grises.value !== '0') {
                  filtros += `grayscale(${$grises.value}%) `;
            }
            if ($sepia.value !== '0') {
                  filtros += `sepia(${$sepia.value}%) `;
            }
            if ($hue.value !== '0') {
                  filtros += `hue-rotate(${$hue.value}deg) `;
            }
            if ($saturado.value !== '100') {
                  filtros += `saturate(${$saturado.value}%) `;
            }
            if ($negative.value !== '0') {
                  filtros += `invert(${$negative.value}) `;
            }
            $imgMeme.style.filter = filtros.trim();
      }

      actualizarFiltros()


      /*-------restablecer--------*/

      $reestablecerV.addEventListener("click", reestablecerValores)

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
      $textoInferior.addEventListener("input", (e) => {
            $textoInferiorMain.innerText = e.target.value;


      })
      $sinTextoInferior.addEventListener("change", () => {
            if ($sinTextoInferior.checked) {
                  $textoInferiorMain.style.color = "transparent";
            } else {
                  $textoInferiorMain.style.color = "black"
            };
      })
      $seleccionFuente.addEventListener("change", () => {
            $topTextMain.style.fontFamily = $seleccionFuente.value;
      })
      $seleccionFuente.addEventListener("change", () => {
            $textoInferiorMain.style.fontFamily = $seleccionFuente.value
      })
      $tamano.addEventListener("click", () => {
            $topTextMain.style.fontSize = `${$tamano.value}px`;
            $textoInferiorMain.style.fontSize = `${$tamano.value}px`;

      })
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
      $color.addEventListener("input", () => {

            $topTextMain.style.color = $color.value;
            $textoInferiorMain.style.color = $color.value;
      })
      $colorFondo.addEventListener("input", () => {
            $topTextMain.style.backgroundColor = $colorFondo.value;
            $textoInferiorMain.style.backgroundColor = $colorFondo.value;

      })
      $transparente.addEventListener("change", () => {
            $topTextMain.style.backgroundColor = "transparent";
            $textoInferiorMain.style.backgroundColor = "transparent";
      })
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
      $espaciado.addEventListener("input", () => {

            $topTextMain.style.paddingTop = `${$espaciado.value}px`;
            $textoInferiorMain.style.paddingBottom = `${$espaciado.value}px`;
      })
      $interlineado.addEventListener("change", () => {
            $topTextMain.style.lineHeight = $interlineado.value
      })
      $descargar.addEventListener("click", () => {

            domtoimage.toBlob($canvasMeme).then((blob) => {
                  saveAs(blob, "mi-meme.png");
            });
      })
}
