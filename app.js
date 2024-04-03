let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Desafio Trilhas Inova - Semana 1';
let subTitulo =  document.querySelector('p');
subTitulo.innerHTML = 'Feito por Jorge Ferreira';

function exercicio01() {
    console.log ('O botão 01 foi clicado.');
    alert('Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.');
    let nota1 = parseInt(prompt ('Digite a primeira nota.'));
    let nota2 = parseInt(prompt ('Digite a segunda nota.'));
    let nota3 = parseInt(prompt ('Digite a terceira nota.'));
    let mediaNotas = (nota1 + nota2 + nota3)/3;
    alert(`A média das notas é ${mediaNotas}.`);
}

function exercicio02() {
    console.log ('O botão 02 foi clicado.');
    let numerosSorteio = [15,8,90,75,102,6,2];
    alert(`Os números sorteados foram: ${numerosSorteio}.`);
    console.log(`Os números são ${numerosSorteio}.`);
    numerosSorteio.sort((a, b) => a - b);
    alert(`Os números em ordem são ${numerosSorteio}.`);
}

function exercicio03() {
    console.log ('O botão 03 foi clicado.');
    let numerosFrascos = [12,5,23,17,8,14,3,19];
    alert(`Escreva um programa que faça a ordenação dos frascos: ${numerosFrascos}.`);
    console.log(`Os números são ${numerosFrascos}.`);
    numerosFrascos.sort((a, b) => a - b);
    alert(`Os números dos frascos em ordem são ${numerosFrascos}.`);
}

function exercicio04() {
    console.log ('O botão 04 foi clicado.');
    let novosCampos = [23,16,11,8,19,14,5,21];
    alert ('Em uma pequena vila, um fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Os números dos lotes são: 23, 16, 11, 8, 19, 14, 5, 21.');
    function verificarPrimo(numero) {
        if (numero <= 1) {
          return false;
        }
        for (let i = 2; i < numero; i++) {
          if (numero % i === 0) {
            return false;
          }
        }
        return true;
      }
    let numerosPrimos = [];
    for (let i = 0; i < novosCampos.length; i++) {
        if (verificarPrimo(novosCampos[i])) {
          numerosPrimos.push(novosCampos[i]);
        }
      }
      console.log(`Números primos na lista: ${numerosPrimos}.`);
      alert(`Os lotes de números primos são: ${numerosPrimos}.`)
}

function exercicio05() {
    console.log ('O botão 05 foi clicado.');
    let frase = prompt('Digite uma frase para calcular o número de palavras nela.');
    let palavras = frase.split(' ');
    let numeroPalavras = palavras.length
    alert(`A frase contém ${numeroPalavras} palavras.`);
    console.log(`A frase contém ${numeroPalavras} palavras.`);
}

function exercicio06() {
    console.log ('O botão 06 foi clicado.');
    function calculoFatorial(numero) {
        let resultado = 1;
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
    let numeroFatorial = prompt('Digite um número para calcular o fatorial dele.');
    numeroFatorial = parseInt(numeroFatorial);
    let resultado = calculoFatorial(numeroFatorial);

    alert(`O fatorial de ${numeroFatorial} é ${resultado}.`);
    console.log(`O fatorial de ${numeroFatorial} é ${resultado}.`);
}

function exercicio07() {
    console.log ('O botão 07 foi clicado.');
    alert ('Em uma loja de conveniência, um cliente comprou três itens e precisa calcular o total da compra.');

    let item1 = parseFloat(prompt('Digite o valor do primeiro item.'));
    let item2 = parseFloat(prompt('Digite o valor do segundo item.'));
    let item3 = parseFloat(prompt('Digite o valor do terceiro item.'));

    function calcularCompra () {
        return item1 + item2 + item3;
    }

    let total = calcularCompra();
    alert (`O valor total da compra é de R$ ${total.toFixed(2).replace('.',',')}.`);
    console.log (`O valor total da compra é de R$ ${total.toFixed(2).replace('.',',')}.`);
}

function exercicio08() {
    console.log ('O botão 08 foi clicado.');
    alert ('Em uma biblioteca, crie um sistema que calcule o valor da multa de devolução dos usuários, considerando uma base inicial de R$ 0,50 por dia.');

    let totalLivros = prompt('Quantos livros o usuário possui em atraso?');
    let diasDeAtraso = prompt('Qual o total de dias em atraso?');
    
    function valorMulta() {
        return totalLivros * (diasDeAtraso * 0.5);
    }

    let total = valorMulta();
    alert (`O valor total da multa é de R$ ${total.toFixed(2).replace('.',',')}.`);
    console.log (`O valor total da multa é de R$ ${total.toFixed(2).replace('.',',')}.`);
}

function exercicio09() {
    let pontosVida = 100;
    let danoInimigo = 20;
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;

    console.log('O botão 09 foi clicado.');
    console.log(numeroSecreto);

    alert('Você é um herói aventureiro embarcando em uma jornada rumo ao horizonte, quando de repente um golbin saiu de trás dos arbustos para lhe atacar.');
    alert('Para desviar dos ataques e contra-atacar, você precisa adivinhar o número secreto a cada turno. Mas cuidado: você só possui 100 pontos de vida e a cada ataque sofrido você sofre 20 de dano.');

    while (pontosVida > 0) {
    let chute = parseInt(prompt('Escolha um número entre 1 e 10'));

    if (chute === numeroSecreto) {
        alert('Você desviou do ataque!');
        break; // Parar o loop quando o jogador acertar o chute
    } else {
        if (chute > numeroSecreto) {
        alert(`O número secreto é menor! Você sofreu ${danoInimigo} de dano!`);
        } else {
        alert(`O número secreto é maior! Você sofreu ${danoInimigo} de dano!`);
        }
        pontosVida -= danoInimigo;
    }
    }

    if (pontosVida > 0) {
    alert('Você derrotou o goblin inimigo e continua sua jornada vitoriosa!');
    } else {
    alert('Você foi derrotado! Sua jornada chegou ao fim.');
    }
}

function exercicio10() {
    console.log('O botão 10 foi clicado.');
    let frase = prompt('Digite uma frase para calcular o número de letras maiúsculas nela.');
    
    function encontrarMaiusculas (frase) {
        let letrasMaiusculas = frase.match(/[A-Z]/g);
        return letrasMaiusculas;
    }

    let resultado = encontrarMaiusculas(frase);
    console.log(resultado);
    alert(`As letras maiúsculas da frase fornecida são: ${resultado}.`);
}

function exercicio11() {
    console.log('O botão 11 foi clicado.');
    let dataNascimento = prompt('Digite a data do seu nascimento, no formato ANO-MÊS-DIA.','YYYY-MM-DD');

    function calcularIdade(dataNascimento) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    const anoNascimento = new Date(dataNascimento).getFullYear();
    const mesNascimento = new Date(dataNascimento).getMonth() + 1;
    const diaNascimento = new Date(dataNascimento).getDate();

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
    }

      let idade = calcularIdade(dataNascimento);
      console.log(`A idade atual é de ${idade} anos.`);
      alert(`Você tem ${idade} anos.`);
}

