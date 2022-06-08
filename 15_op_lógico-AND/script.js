var idade = 16;
var nome = "João";

if (nome == "João" && idade == 16) {
    console.log("Esse é nosso aluno, portanto pode entrar na aula de violino");
}
else {
    console.log("Esse não é nosso aluno");
}

if (1 == 1 && 3 > 2 && true) {
    console.log("Passou!")
}

if ((1 == 1 && 3 > 3) && true) {
    console.log("Passou!!");
}
else if (nome == "João" && idade > 14) {
    console.log("Aqui passou!!");
}