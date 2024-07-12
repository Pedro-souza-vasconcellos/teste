document.querySelector('#btn').addEventListener('click',manipula);
function manipula(){
    alert();
    const url = '35240735714164000165570010000001381631877007-CTe.xml';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const texto = xhr.responseText;
            console.log(texto);
        }
    }
    xhr.open('GET',url,true);
    xhr.send();
}

