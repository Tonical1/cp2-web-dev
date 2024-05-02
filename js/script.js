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

//validando login
function validarlogin(){
    let validar = false;
    if(document.getElementById("nomelogin").value =="admin" && document.getElementById("senhalogin").value =="123"){ 
        validar = true;
    }else{
        //Não fazer nada.
    } return validar
}
function enviandologin(){
    if(validarlogin()){
        alert("redirecionando...")
        window.location.replace("quiz.html")
        
        
    }else{
        alert("Usuário ou senha incorretos!")
}}

//quiz

function iniciarquiz(){
    let pontos = 0;
    let resposta1 = prompt("Quantas rodas tem uma bike comum?")
    if (resposta1 == "2"){
        alert("acertou, +1 ponto!")
        pontos = 1;
    } else{
        alert("Resposta incorreta!")
    }
    let resposta2 = prompt("Em qual ano foi inventada a bike?")
    if (resposta2 == "1817"){
        alert("acertou, +1 ponto!")
        pontos = pontos + 1;
    } else{
        alert("Resposta incorreta!")
    }
    let resposta3 = prompt("Qual o primeiro nome da pessoa que inventou a bike?").toLowerCase()
    console.log(resposta3)
    if (resposta3 == "karl"){
        alert("acertou, +1 ponto!")
        pontos = pontos + 1
    } else{
        alert("Resposta incorreta!")
    }
    let resposta4 = prompt("Qual o sobrenome da pessoa que inventou a bike (haha achou que não iria perguntar)?").toLowerCase()
    if (resposta4 == "von drais"){
        alert("acertou, +1 ponto!")
        pontos = pontos + 1
    } else{
        alert("Resposta incorreta!")
    }
    let resposta5 = prompt("Em qual ano o ciclismo se tornou esporte olímpico?")
    if (resposta5 == "1996"){
        alert("acertou, +1 ponto!")
        pontos = pontos + 1
    } else{
        alert("Resposta incorreta!")
    }
    let resposta6 = prompt("O criador do site gosta de andar de bike (: ?").toLowerCase()
    if (resposta6 == "sim"){
        alert("acertou, +1 ponto!")
        pontos = pontos + 1
    } else{
        alert("Resposta incorreta!")
    }
    let resposta7 = prompt("Esta gostando do quiz?")
    if (resposta7 == "sim"){
        alert("acertou, +1 ponto!")
        pontos = pontos + 1
    } else{
        alert("Po, sacanagem )= ")
    }
    let resposta8 = prompt("Qual a cidade brasileira que mais usa bicicletas em deslocamentos diários?").toLowerCase()
    if (resposta8 == "porto alegre"){
        alert("acertou, +1 ponto!")
        pontos = pontos + 1
    } else{
        alert("Resposta incorreta!")
    }
    let resposta9 = prompt("Qual cidade do Brasil tem maior numero de ciclofaixas?").toLowerCase()
    if (resposta9 == "são paulo" || "sao paulo"){
        alert("acertou, +1 ponto!")
        pontos = pontos + 1
    } else{
        alert("Resposta incorreta!")
    }
    let resposta10 = prompt("Qual o nome do esporte radical em terrenos irregulares (principalmente montanhas) com bike?").toLowerCase()
    if (resposta10 == "mountain bike"){
        alert("acertou, +1 ponto!")
        pontos = pontos + 1
    } else{
        alert("Resposta incorreta!")
    }
    alert(`Parabens! Você finalizou o quiz com ${pontos} pontos`)
}
