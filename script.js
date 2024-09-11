let itulo = document.getElementById("titulo")
console.log(titulo)
let ul = document.querySelector("ul")
console.log(ul)
let ol = document.getElementById("lista-ordenada")
console.log(ol)
let a = document.querySelector("a")
console.log(a)

titulo.innerText = "Título Site"
a.innerText = "Link Proz"
ul.innerHTML = `
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
`
ol.innerHTML = `
    <li><a href="https://www.youtube.com/">Youtube</a></li>
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://www.crunchyroll.com/">Crunchyroll</a></li>
`