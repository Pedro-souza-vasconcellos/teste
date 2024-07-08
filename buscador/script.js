//Este código foi desenvolvido em JavaScript por Pedro Souza: 

document.getElementById('youtube').addEventListener('click',youtube);
document.getElementById('google').addEventListener('click',google);
document.getElementById('spotify').addEventListener('click',spotify);
function youtube(){
    const pesquisa = document.getElementById('pesquisa').value;
    window.open(`https://youtube.com/results?search_query=${pesquisa}`,"framename");
};
function google(){
    const pesquisa = document.getElementById('pesquisa').value;
   window.open(`https://google.com/search?q=${pesquisa}`,"framename");
};
function spotify(){
    const pesquisa = document.getElementById('pesquisa').value;
    window.open(`https://open.spotify.com/search/${pesquisa}`,"framename");
};
function teste(){
    window.open('https://www.youtube.com/watch?v=JQOzOwVJasY',"framename")
}
