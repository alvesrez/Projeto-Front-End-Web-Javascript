   // Esta função realiza a soma de todas as idades no vetor
   var sumAges = (vet) => {
    let sum = 0;
    vet.forEach(age => sum += age);
    return sum;
};

// Este é o vetor com as idades informada no exercício
var vetAges = [10, 21, 31, 40];

// A) Aqui nós calculamos a soma das idades e mostramos na tela
document.write(`<p>Lista2: Soma das idades = ${sumAges(vetAges)}</p>`);

// b) A média aritmética simples das idades utilizando reduce()
var averageReduce = (vet) => {return vet.reduce((acc, age) => acc + age, 0) / vet.length;
};

// Calculando a média utilizando a nova função
var average = averageReduce(vetAges);
document.write(`<p>a) Média das idades = ${average}</p>`);

// c - Aqui nós encontramos a maior idade no vetor e mostramos na tela
var maiorIdade = Math.max(...vetAges);
document.write(`<p>B - Maior idade = ${maiorIdade}</p>`);

// d) As idades ímpares
var ImparAges = (vet) => vet.filter(age => age % 2 !== 0);
document.write(`<p> C - Idades ímpares = ${ImparAges(vetAges)}</p>`);

// e) Verificar se todos são maiores de idade (idade >= 18); Retorno: VERDADEIRO ou FALSO
var MaiorDeIdade = (vet) => vet.every(age => age >= 18);
document.write(`<p> D -  Todos são maiores de idade? ${MaiorDeIdade(vetAges)}</p>`);

// Solicitar a entrada do usuário uma vez
var idadeEspecifica = prompt("Informe uma idade:");

// f) Exibir todas as idades maiores ou iguais a determinada idade
var agesAboveCertainAge = (vet, age) => vet.filter(a => a >= age);
var agesAbove = agesAboveCertainAge(vetAges, idadeEspecifica);
document.write(`<p> F - Idades maiores ou iguais a ${idadeEspecifica} = ${agesAbove}</p>`);

// g) A média das idades das pessoas com idades maiores ou iguais a determinada idade
var averageAgeAboveIdadeEspecifica = (vet, age) => {
    let filteredAges = vet.filter(a => a >= age);
    return filteredAges.reduce((a, b) => a + b, 0) / filteredAges.length;
};
var averageAge = averageAgeAboveIdadeEspecifica(vetAges, idadeEspecifica);
document.write(`<p>G - Média das idades maiores ou iguais a ${idadeEspecifica}: ${averageAge}</p>`);

// h) A média das idades das pessoas com idades maiores ou iguais a determinada idade
// Usando a mesma função e entrada do item g)
var averageAgeH = averageAgeAboveIdadeEspecifica(vetAges, idadeEspecifica);
document.write(`<p>H - Média das idades maiores ou iguais a ${idadeEspecifica}: ${averageAgeH}</p>`);