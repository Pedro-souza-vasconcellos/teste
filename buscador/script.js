document.getElementById('youtube').addEventListener('click',youtube);
function youtube(){
    window.open(`https://youtube.com/results?search_query=${document.getElementById('pesquisa').value}`,"_blanck");
}

document.getElementById('google').addEventListener('click',google);
function google(){
   window.open(`https://google.com/search?q=${document.getElementById('pesquisa').value}`,"_blanck");
}
document.getElementById('spotify').addEventListener('click',spotify);
function spotify(){
    window.open(`https://open.spotify.com/search/${document.getElementById('pesquisa').value}`,"_blanck");
}

