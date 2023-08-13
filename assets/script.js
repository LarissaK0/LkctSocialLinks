function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar img //

  const img = document.querySelector("#profile img")

  // substituir a imagem //

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/larisglasses.png")
  }

  else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/larisprofile.png")
  }


/* if(html.classList.contains('light')){
  html.classList.remove('light')
}
  else {
    html.classList.add('light')
  }*/


}