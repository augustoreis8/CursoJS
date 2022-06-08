var idade = 16;
var nome = "João";

if (nome == "João" || idade == 16) {
    console.log("Pode entrar na aula de violino");
}
else {
    console.log("Não pode entrar na aula de violino");
}

if ((nome == "João" && 15 > 20) || 10 == 10) {
    console.log("Testando...");
}
else {
    console.log("Não entrou...")
}

if ((nome == "Pedro" && 15 > 20) || 10 == 10) {
    console.log("Testando...1");
}
else {
    console.log("Não entrou...1")
}

if ((nome == "Pedro" && 30 > 20) || 10 == 10) {
    console.log("Testando...2");
}
else {
    console.log("Não entrou...2")
}

if (nome == "Pedro" && (35 > 20 || 10 == 10)) {
    console.log("Testando...3");
}
else {
    console.log("Não entrou...3")
}