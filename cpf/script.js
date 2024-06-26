const input = document.getElementById('numero');
input.addEventListener("keyup", ()=>{
    var valor  = input.value;
        if(valor.length == 3 || valor.length == 7){
            input.value = input.value + "." ;
        } else if(valor.length == 11){
            input.value = input.value + "-";
        }
})
function enviar(){    
    const layout = document.getElementById('layout');
    const mensagem = document.createElement('h3');
    const botaoSim = document.createElement('button');
    const botaoNao = document.createElement('button');
    botaoNao.addEventListener('click',nao);
    botaoNao.textContent = 'Não'
    botaoSim.addEventListener('click', sim);
    botaoSim.textContent = 'Sim';
    mensagem.textContent = "Seu CPF é: " + input.value + "?";
    layout.append(mensagem,botaoSim,botaoNao);
}
function sim(){
    var valor = input.value
    if(valor.length == 14){
        alert('CPF Enviado')
    }else{
        alert("CPF Inválido");
    }
}
function nao(){
    const layout = document.getElementById('layout');
    layout.innerHTML = "";
    input.value = '';
}