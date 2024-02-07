const lista = [
    { nome: 'Jose', idade: 13 },
    { nome: 'Joao', idade: 42 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Gabriela', idade: 25 },
    { nome: 'Fernanda', idade: 65 },
    { nome: 'André', idade: 69 },
    { nome: 'Heitor', idade: 32 },
    { nome: 'Gustavo', idade: 64 },
    { nome: 'Sandra', idade: 33 },
]

// for(let i = 0; i < lista.length; i++) {
//     console.log(lista[i]);
// }

lista.forEach((objeto) => {
    console.log(objeto);
})