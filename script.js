function mensagem(){
    console.log("Olá mundo!!");
}
mensagem();
/*-------------------------------------------*/
function seuNome (nome){
    console.log("Seu nome é: ", nome);
}
seuNome("Franciane");
seuNome("Maria");
seuNome("Ana");
/*-------------------------------------------*/
function perfil(nome, idade, musicaPredileta){
    console.log("Seu nome é: ",nome, "| Sua idade é: ",idade,"| Musica Preferida: ", musicaPredileta);
}
perfil("Franciane",28,"My Immortal");
perfil("Pedro",18,"Pontes indestrutíveis");
perfil("Mariah",35,"Toxic");
/*-------------------------------------------*/
function hobbies (filme, musica) {
    console.log("Seu filme é:",filme,"Sua música é: ",musica);
}
hobbies("A patricinhas de Beberly Hills","Baby one more time");
hobbies("As branquelas","Céu Azul");
hobbies("Interestelar","In Waves");
/*-------------------------------------------*/
function triploNumero (numero){
        return numero ** 3;
}
console.log(triploNumero(2));