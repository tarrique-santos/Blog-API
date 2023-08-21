document.addEventListener("DOMContentLoaded", async function () {
    const url = "https://api-rest-post-diegocandido.herokuapp.com/postagens/";
    const res = await fetch(url);
    const data = await res.json();

    const post = data.find(post => post.title === localStorage.getItem('title'));
    document.getElementById('imgPost').src = `https://api-rest-post-diegocandido.herokuapp.com${post.thumbImage}`
    document.getElementById('modal-title').innerHTML = post.title
    document.getElementById('modal-description').innerHTML = post.description
    document.getElementById('autor').innerHTML = post.profileName
    document.getElementById('data').innerHTML = post.postDate
});