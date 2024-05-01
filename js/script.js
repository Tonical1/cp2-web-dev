//Variaveis

//alerta pagina principal (boas vindas)


//Validação
function validarCampo(){
    let valida = false;
    if(document.getElementById("nome").value == ""){
        valida = true;
    }else if (document.getElementById("telefone").value == ""){
        valida = true;
    }else if (document.getElementById("email").value == ""){
        valida = true;
    }else{
        //Não fazer nada.
    } return valida
}
function enviando(){
    if(validarCampo()){
        alert("preencha o campo vazio!!")
    }else{
        alert("Dados enviados!")
}}

//Criando cores automaticas


//criando slideshow
//declarando as variaveis

let imagens = ["./img/bike1.jpg", "./img/bike2.jpg", "./img/bike3.jpg","./img/bike4.jpg"];
let index = 0;
let time = 3000; //em (ms)

function slideshow(){
    document.getElementById('imgbanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;

    }
    setTimeout('slideshow()', time)
}
slideshow();
