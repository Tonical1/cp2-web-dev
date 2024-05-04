//Variaveis

//alerta pagina principal (boas vindas)
function welcome(){
    alert("Seja bem-vindo(a)")
}

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
function mudarcor(){
    let lista = [`rgb(${(111)}, ${(122)}, ${(90)})`,
                `rgb(${(90)}, ${(94)}, ${(100)})`,
                `rgb(${(100)}, ${(122)}, ${(145)})`
            ]

    for (let ind = 0; ind < lista.length; ind++) {
        setTimeout(function(){
            document.body.style.backgroundColor = lista[ind];
            console.log(ind);
        }, (ind + 1) * 2000);
    }
}
window.addEventListener('load',function(){
    mudarcor()
    this.setInterval(function(){
        mudarcor();
    }, 6000) //executar de tempos em tempos
})

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

function iniciarquiz() {
    let respostas = [];
    let pontos = 0;

    let resposta1 = prompt("Quantas rodas tem uma bike comum?");
    if (resposta1 == "2") {
        alert("acertou, +1 ponto!");
        pontos++;
        respostas.push("Resposta correta na pergunta 1");
    } else {
        alert("Resposta incorreta!");
        respostas.push("Resposta incorreta na pergunta 1");
    }

    let resposta2 = prompt("Em qual ano foi inventada a bike?");
    if (resposta2 == "1817") {
        alert("acertou, +1 ponto!");
        pontos++;
        respostas.push("Resposta correta na pergunta 2");
    } else {
        alert("Resposta incorreta!");
        respostas.push("Resposta incorreta na pergunta 2");
    }

    let resposta3 = prompt("Qual o primeiro nome da pessoa que inventou a bike?").toLowerCase();
    if (resposta3 == "karl") {
        alert("acertou, +1 ponto!");
        pontos++;
        respostas.push("Resposta correta na pergunta 3");
    } else {
        alert("Resposta incorreta!");
        respostas.push("Resposta incorreta na pergunta 3");
    }

    let resposta4 = prompt("Qual o sobrenome da pessoa que inventou a bike (haha achou que não iria perguntar)?").toLowerCase();
    if (resposta4 == "von drais") {
        alert("acertou, +1 ponto!");
        pontos++;
        respostas.push("Resposta correta na pergunta 4");
    } else {
        alert("Resposta incorreta!");
        respostas.push("Resposta incorreta na pergunta 4");
    }

    let resposta5 = prompt("Em qual ano o ciclismo se tornou esporte olímpico?");
    if (resposta5 == "1996") {
        alert("acertou, +1 ponto!");
        pontos++;
        respostas.push("Resposta correta na pergunta 5");
    } else {
        alert("Resposta incorreta!");
        respostas.push("Resposta incorreta na pergunta 5");
    }

    let resposta6 = prompt("O criador do site gosta de andar de bike (: ?").toLowerCase();
    if (resposta6 == "sim") {
        alert("acertou, +1 ponto!");
        pontos++;
        respostas.push("Resposta correta na pergunta 6");
    } else {
        alert("Resposta incorreta!");
        respostas.push("Resposta incorreta na pergunta 6");
    }

    let resposta7 = prompt("Esta gostando do quiz?").toLowerCase();
    if (resposta7 == "sim") {
        alert("acertou, +1 ponto!");
        pontos++;
        respostas.push("Resposta correta na pergunta 7");
    } else {
        alert("Resposta incorreta!");
        respostas.push("Resposta incorreta na pergunta 7");
    }

    let resposta8 = prompt("Qual a cidade brasileira que mais usa bicicletas em deslocamentos diários?").toLowerCase();
    if (resposta8 == "porto alegre") {
        alert("acertou, +1 ponto!");
        pontos++;
        respostas.push("Resposta correta na pergunta 8");
    } else {
        alert("Resposta incorreta!");
        respostas.push("Resposta incorreta na pergunta 8");
    }

    let resposta9 = prompt("Qual cidade do Brasil tem maior número de ciclofaixas?").toLowerCase();
    if (resposta9 === "são paulo" || resposta9 === "sao paulo") {
        alert("acertou, +1 ponto!");
        pontos++;
        respostas.push("Resposta correta na pergunta 9");
    } else {
        alert("Resposta incorreta!");
        respostas.push("Resposta incorreta na pergunta 9");
    }

    let resposta10 = prompt("Qual o nome do esporte radical em terrenos irregulares (principalmente montanhas) com bike?").toLowerCase();
    if (resposta10 == "mountain bike") {
        alert("acertou, +1 ponto!");
        pontos++;
        respostas.push("Resposta correta na pergunta 10");
    } else {
        alert("Resposta incorreta!");
        respostas.push("Resposta incorreta na pergunta 10");
    }

    alert(`Parabéns! Você finalizou o quiz com ${pontos} pontos`);

    // Exibindo respostas
}

//Mostrando