document.getElementById('youtube').addEventListener('click',youtube);
function youtube(){
    const pesquisa = document.getElementById('pesquisa').value
    window.open(`https://youtube.com/results?search_query=${pesquisa}`,"_blanck");
}

document.getElementById('google').addEventListener('click',google);
function google(){
    const pesquisa = document.getElementById('pesquisa').value
   window.open(`https://google.com/search?q=${pesquisa}`,"_blanck");
}
document.getElementById('spotify').addEventListener('click',spotify);
function spotify(){
    const pesquisa = document.getElementById('pesquisa').value
    window.open(`https://open.spotify.com/search/${pesquisa}`,"_blanck");
}

