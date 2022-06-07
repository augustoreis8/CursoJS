var obj = {
    nome: "Augusto",
    idade: 17,
    profissão: "estudante",
    TarefasFeitas: true,
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissão);

console.log("Meu prmeiro nome é: " + obj.nome);

obj.nome = "Augusto C. Reis";

console.log(obj.nome);
console.log("Meu nome completo é: " + obj.nome);

console.log(obj);

obj.graduação = false;

console.log(obj);
