window.addEventListener('DOMContentLoaded', ()=>{
    //modal
    const container = document.querySelectorAll('.content');
    for(var i = 0; i < container.length; i++){
        const card = container[i];
        card.addEventListener('click',()=>{
            const tituloCard = card.querySelector("h2");
            const texto = card.querySelector("p");
            const modal = document.getElementById('myModal');
            const titulo = document.getElementById('titulo');
            const conteudo = modal.querySelector("#conteudo");
            titulo.textContent = tituloCard.textContent;
            conteudo.textContent = texto.textContent;
            const span = document.getElementsByClassName('close')[0];
            modal.style.display = 'block'
            span.addEventListener('click',()=>{
            modal.style.display = 'none';
            })
        })
    }
})