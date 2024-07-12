document.querySelector('#Entrar').addEventListener('click',login)

function login(){
    const p = document.querySelector('#mensagem');
    p.hidden = true
    const loginInp = document.querySelector("#login");
    const senhaInp = document.querySelector("#senha");
    if(loginInp.value == "" || senhaInp.value == ""){
        p.hidden = false
        const quadro = document.getElementById('quadro');
        quadro.style.height = '560px';
    }else{
            const endpoit = "xmls/teste.xml"
            fetch(endpoit)
            .then(res=> res.text())
            .then(dados => {
                
                const conversor = new DOMParser();
                const xmlDocument = conversor.parseFromString(dados,"text/xml");
                const pessoa = xmlDocument.getElementsByTagName('pessoas')[0].getElementsByTagName('pessoa');
                var key = 0;
                for(var i = 0; i < pessoa.length; i++){
                    var pessoaAtual = pessoa[i];
                    if((pessoaAtual.getElementsByTagName('email')[0].innerHTML == loginInp.value || pessoaAtual.getElementsByTagName('nome')[0].innerHTML == loginInp.value) && pessoaAtual.getElementsByTagName('senha')[0].innerHTML == senhaInp.value) {
                            
                        const user = {
                            nome: pessoaAtual.getElementsByTagName('nome')[0].innerHTML,
                            idade: pessoaAtual.getElementsByTagName('idade')[0].innerHTML,
                            cpf: pessoaAtual.getElementsByTagName('cpf')[0].innerHTML,
                            email: pessoaAtual.getElementsByTagName('email')[0].innerHTML,
                            senha: pessoaAtual.getElementsByTagName('senha')[0].innerHTML,
                        }
                        localStorage.setItem('user',JSON.stringify(user));
                        window.location.href = 'principal.html';
                    } else{
                        key++
                    }
                };
                if(key == pessoa.length){
                    alert('nenhum usuario encontrado');
                    key = 0;
                }
        
            })
            .catch(error =>{
                alert('Erro : ' + error)
            })
    }
}