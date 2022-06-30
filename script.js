let idade = 18;
if(idade){
    console.log("Tem 18 anos, então pode entrar!")
}else{
    console.log("Apenas maiores de 18 anos podem entrar, desculpe.")
}

let maiorIdade = true;
if(maiorIdade){
    console.log("É maior de Idade");
}else{
    console.log("Não é maior de Idade");
}

let mes = "Janeiro";
if((mes === "Janeiro") || (mes === "Dezembro")){
    console.log("Faz aniversário em Janeiro");
}else{
    console.log("Faz aniversário em Dezembro");
}


let nome = "Luan";

// Esse charAt(0) verifica a primeira letra no nome
if(nome.charAt(0) === "R"){
    console.log(nome, "seu nome começa com a letra R");
}

let sobreNome = "Silva";

// esse length verificar a quantidade de letras
if( (sobreNome.length >= 6) || (nome.charAt(0) === "E") ){
    console.log(`Seu sobrenome: ${sobreNome} tem +6 letras ou começa com a letra E`);
}else{
    console.log(`Seu sobrenome: ${sobreNome} não tem +6 letras ou não começa com a letra E`)
}