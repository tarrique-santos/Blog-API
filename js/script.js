document.addEventListener("DOMContentLoaded", async function () {
  const url = "https://api-rest-post-diegocandido.herokuapp.com/postagens/";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  const listaPost = document.getElementById("listaPost");
  for (const post of data) {

    console.log(post)
    listaPost.innerHTML += `
    <div class="card" class="cardItem">
    <img id="img3"
        src="https://api-rest-post-diegocandido.herokuapp.com${post.thumbImage}"
        class="card-img-top" alt="...">
    <div class="card-body" class="cxTexto">
        <h1 id="title3">${post.title}</h1>
        <p class="card-texto" id="textDescripition3">${post.description}</p>
    </div>
    <button class="saibaMais" onClick="redirecionar('${post.title}')">Saiba mais</button>
    </div>
    `
  }
});

function redirecionar(title) {
  localStorage.setItem('title', title);
  location.href = `info.html`
}