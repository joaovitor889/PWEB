var nome,
email,
comentario,
resposta;

function validar(){

    nome = document.pesquisa.elements[0].value
    email = document.getElementById("idEmail").value
    comentario = document.getElementById("idComentario").value
    
    if(nome == "" || nome.length < 10){
        alert("O campo nome tem menos de 10 caracteres")  
                      
    }else if(((email.indexOf("@") > -1) == false) || ((email.indexOf(".") > -1) == false)){
        alert("Informe um endereço de email válido")  

    }else if(comentario.length < 20){
        alert("O campo comentário tem menos de 20 caracteres")  

    }else if(document.getElementById('Sim').checked == false && document.getElementById('Nao').checked == false){
        alert("selecione uma resposta")
        
    }else{
        if(document.querySelector('#Nao').checked == true){
            alert("Que bom que você voltou a visitar esta página!")
        }else{
            alert("Volte sempre à esta página!")
        }
    }
}