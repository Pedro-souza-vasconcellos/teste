const vermelho = document.getElementById('teste');
const valorVermelho = document.getElementById('resposta');
const verde = document.getElementById('verde');
const valorVerde = document.getElementById('valorVerde');
const azul = document.getElementById('azul');
const valorAzul = document.getElementById('valorAzul');
const mostra = document.getElementById('mostra');
vermelho.value = 0;
valorVermelho.value = 0;
verde.value = 0;
valorVerde.value = 0;
azul.value = 0;
valorAzul.value = 0;
var finalVermelho = 0;
var finalVerde = 0;
var finalAzul = 0;
vermelho.addEventListener('change', function(){
    valorVermelho.value = vermelho.value
    finalVermelho = vermelho.value

});
verde.addEventListener('change',function(){
    valorVerde.value = verde.value
    finalVerde = verde.value
});
azul.addEventListener('change' , function(){
    valorAzul.value = azul.value
    finalAzul = azul.value
});

addEventListener('click', function(){
    mostra.style.backgroundColor = `rgb(${finalVermelho},${finalVerde},${finalAzul})`
});

valorVermelho.addEventListener('input',function(){
    vermelho.value = valorVermelho.value
    if(valorVermelho.value == ""){
        vermelho.value = 0
    }
    finalVermelho = valorVermelho.value
    this.click();
})

valorVerde.addEventListener('input',function(){
    verde.value = valorVerde.value
    if(valorVerde.value == ""){
        verde.value = 0
    }
    finalVerde = valorVerde.value
    this.click();
})

valorAzul.addEventListener('input',function(){
    azul.value = valorAzul.value
    if(valorAzul.value == ""){
        azul.value = 0
    }
    finalAzul = valorAzul.value
    this.click();
})