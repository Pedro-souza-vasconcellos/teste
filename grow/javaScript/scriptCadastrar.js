const endpoit = "xmls/teste.xml";
const btn = document.getElementById('btn');
btn.addEventListener('click',verificaUsuario);

function verificaUsuario(){
    const email = document.querySelector("#email");
    const nome = document.querySelector("#nome");
    const cpf = document.querySelector("#cpf");
    const idade = document.querySelector("#idade");
    const senha = document.querySelector("#senha");
    if(email.value == "" || nome.value == "" || cpf.value == "" || idade.value == "" || senha.value == ""){
        alert('Campo Vazio');
    }else{
        fetch(endpoit)
        .then(resposta => resposta.text())
        .then(resposta =>{
            const conversor = new DOMParser();
            const xmlDocument = conversor.parseFromString(resposta,'text/xml');
            const pessoa = xmlDocument.getElementsByTagName('pessoas')[0].getElementsByTagName('pessoa');
            for(var i = 0; i < pessoa.length; i++){
                var pessoaAtual = pessoa[i];
                if(pessoaAtual.getElementsByTagName('email')[0].innerHTML == email.value){
                    return alert('Email Já Cadastrado')
                } else if(pessoaAtual.getElementsByTagName('nome')[0].innerHTML == nome.value){
                    return alert('Nome de Usuário Já Utilizado');
                } else if(pessoaAtual.getElementsByTagName('cpf')[0].innerHTML == cpf.value){
                    return alert('CPF Já Cadastrado');
                } else{
                   return newUsuario()
                }
            }
        })
        .catch(erro =>{
            alert('Ocorreu Um Erro : ' + erro)
        })    
    }
}

/*function newUsuario(){
    const email = document.querySelector("#email");
    const nome = document.querySelector("#nome");
    const cpf = document.querySelector("#cpf");
    const idade = document.querySelector("#idade");
    const senha = document.querySelector("#senha");

    const xmlData = `
    <pessoas>
        <pessoa>
            <nome>${nome.value}</nome>
            <idade>${idade.value}</idade>
            <cpf>${cpf.value}</cpf>
            <email>${email.value}</email>
            <senha>${senha.value}</senha>
        </pessoa>
    </pessoas>
    `;
    const myInit = {
        method: 'POST',
        headers:{'Content-Type': 'application/xml',},
        body: xmlData,
    }
    const myRequest = new Request(endpoit,myInit);
    fetch(myRequest)
    .then(res =>{
         if(!res.ok){
            throw new Error('Erro ao Cadastrar pessoa : ');
         }
         return res.text();
    })
    .then(resText =>{
        console.log('Pessoa Cadastrada com Sucesso' + resText);
        alert('Pessoa Cadastrada com Sucesso');
    })
    .catch(erro =>{
        alert('Erro : ' + erro)
    })
}*/
function newUsuario() {
    const email = document.querySelector("#email").value;
    const nome = document.querySelector("#nome").value;
    const cpf = document.querySelector("#cpf").value;
    const idade = document.querySelector("#idade").value;
    const senha = document.querySelector("#senha").value;

    const xmlData = `
        <pessoa>
            <nome>${nome}</nome>
            <idade>${idade}</idade>
            <cpf>${cpf}</cpf>
            <email>${email}</email>
            <senha>${senha}</senha>
        </pessoa>
    `;

    const myInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/xml' },
        body: xmlData,
    };

    const myRequest = new Request(endpoit, myInit);
    fetch(myRequest)
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro ao Cadastrar pessoa: ' + res.statusText);
            }
            return res.text();
        })
        .then(resText => {
            console.log('Pessoa Cadastrada com Sucesso: ' + resText);
            alert('Pessoa Cadastrada com Sucesso');
        })
        .catch(erro => {
            alert('Erro: ' + erro.message);
        });
}
