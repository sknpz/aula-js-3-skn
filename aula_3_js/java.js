/*declarando variáveis*/

/*criando uma função para calculo do IMC*/
function calcIMC(){
    let altura = (document.getElementById("al").value)/100;//pegando o valor da altura
    let peso = document.getElementById("ps").value;//pegando o valor do peso

    altura = parseFloat(altura);//convertendo o valor da altura para número
    /*
    Tipos de Dados:
    int = número inteiro
    float = de ponto flutuante, exemplo o preço da gasolina 6.27
    string = texto, exemplo: "Olá Mundo"
    boolean = verdadeiro ou falso, exemplo: true ou false
    */
    peso = parseFloat(peso);//convertendo o valor do peso para número

    imc = peso / (altura * altura);//calculo do IMC
    window.alert ("Seu IMC é: " + imc);//Exibe com 2 casas decimais
}
function alternarTemas_escuro() {
    const corpo = document.body;
    corpo.classList.toggle("escuro");
}
function alternarTemas_claro() {
    const corpo = document.body;
    corpo.classList.toggle("claro");
}