
async function guardioes(){
        if(document.getElementById("titulo").value == "") return;

        const titulo = document.getElementById("titulo").value;
        const diretor = document.getElementById("diretor");
        const genero = document.getElementById("genero");
        const poster = document.getElementById("poster");
        
        let resposta = await fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=f443c1c8`)
                .then(res => { return res.json()}); 
        
        diretor.value = resposta.Director;
        genero.value = resposta.Genre;

        poster.src = resposta.Poster;
        poster.classList.add('active')
}

function limpar(diretor, poster, titulo){
        titulo.value = "";
        diretor.value = "";

        post.classList.remove('active');
        poster.src = "";
} 
