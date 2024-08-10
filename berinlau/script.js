function verifica(){
    const audio = new Audio('assets/audios/saxofone.mp3')
    const nome = document.getElementById('nome').value;
    const msgNome = document.getElementById('msgNome');
    const filhos = document.getElementById('filhos');
    const msgFilhos = document.getElementById('msgFilho');
    const lugar = document.getElementById('morar');
    const msgLugar = document.getElementById('msgLugar');
    const container = document.getElementById('container');

    container.hidden =true
    msgNome.hidden = true;
    msgFilhos.hidden = true;
    msgLugar.hidden = true;

    var nomeTratado = nome.toLowerCase();

   nomeTratado = nomeTratado.replace(/\s/g, '');
   if(nomeTratado != "rebecaaparecidomarianodesouza" && nomeTratado != "rebecamarianodesouza"){
        msgNome.hidden = false;
        return
   }else if(filhos.value != "dez"){
        msgFilhos.hidden = false;
        return
   } else if(lugar.value != "inglaterra"){
        msgLugar.hidden = false;
        return
   }else{
        container.hidden = false;
        audio.play();
   }
    
}