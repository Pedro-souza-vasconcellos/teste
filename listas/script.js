const adicionar = document.getElementById('adicionar');
const nomes = [];
var btn_organiza = document.getElementById('organiza');
const espaco = document.getElementById('espaco');


adicionar.addEventListener('click', function(){
    var nomeAtual = document.getElementById('nome').value;
    nomes.push(nomeAtual)
    alert("Adicionado: " + nomeAtual)
});

function listaNomes(){
    if(nomes.length == 0){
        alert('Não Existe Alguem Cadastrado');
    } else{
        espaco.textContent ="";
        for(var i = 0; i < nomes.length; i++){
            var linha = document.createElement('li');
            linha.textContent = nomes[i];
            espaco.append(linha)
        }
        btn_organiza.hidden = false;
    }  
}
function organizar(){
    var nomesOrganizados = [];
    nomesOrganizados = nomes.sort();
    espaco.textContent ="";
    for(var i = 0; i < nomesOrganizados.length; i++){
        var linha = document.createElement('li');
        linha.textContent = nomesOrganizados[i]
        espaco.append(linha)
    }
    btn_organiza.hidden = true;
}