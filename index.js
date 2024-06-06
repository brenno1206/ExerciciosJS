// Constantes iguais a todos os arquivos ou que precisam ser declaradas fora da funcão

let correto = Math.floor(Math.random() * 100) + 1;
const body = document.querySelector("body");
const campo = document.querySelector('section#campo');
// ADVINHAÇÃO


function tentativa() {
    vez = Number(window.prompt('Qual é o seu palpite?'));

    if(isNaN(vez)) {
        alert("utilize um número");
        return;
    }
    else if(!Number.isInteger(vez)) {
        alert("Utilize um número inteiro");
        return;
    }
    else if( vez < 1 || vez > 100) {
        alert("O número sortido está entre 1 e 100, tente novamente.");
        return;
    }


    if (vez < correto) {
        campo.innerHTML += `<p>Você chutou <strong>${vez}</strong>. O número é <strong>MAIOR</strong>!</p>`;
    } else if (vez > correto) {
        campo.innerHTML += `<p>Você chutou <strong>${vez}</strong>. O número é <strong>MENOR</strong>!</p>`;
    } else if (vez == correto) {
        campo.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! O valor sorteado era ${correto}!</p>`;
        document.querySelector("button#chute").style.visibility = 'hidden';
    }

}
function limpar() {
    correto = Math.floor(Math.random() * 100) + 1;
    
    document.querySelector("button#chute").style.visibility = 'visible';
    campo.innerHTML = '';
}

// BIN

function binario() {
    let numero = parseInt(document.querySelector('input#area').value);
    let mostrar = numero;
    let bin = [];
    for (let i = 0; numero != 0; i++) {
        bin[i] = numero % 2;
        numero = Math.floor(numero / 2);
    }
    bin.reverse();

    campo.innerHTML += `<p>O número decimal ${mostrar} em binário é ${bin.join('')}</p>`;
}

// CONTAGEMBSC

function crescente(){
    for(let i = 1; i < 11; i ++) {
        campo.innerHTML += ` ${i} `;
    }
    campo.innerHTML += '<br>';
}
function descrescente() {
    for(let i = 10; i > 0; i --) {
        campo.innerHTML += ` ${i} `;
    }
    campo.innerHTML += '<br>';
}
function par1() {
    for(let i = 1; i < 11; i ++) {
        if(i % 2 === 0) {
            campo.innerHTML += ` <strong>${i}</strong> `;
        }
        else {
            campo.innerHTML += ` ${i} `;
        }
    }
    campo.innerHTML += '<br>';
}

function par2() {
    for(let i = 1; i < 11; i ++) {
        if(i % 2 === 0) {
            campo.innerHTML += ` ${i} `;
        }
    }
    campo.innerHTML += '<br>';
}

function tudo() {
    campo.innerHTML = "";
    crescente();
    descrescente();
    par1();
    par2();
}

// FATORIAL

function fatorial(numero) {
    if(numero === 0)
    {
        return 1;
    }
    else {
        return numero * fatorial(numero - 1);
    }
}

function conta() {
    valor = parseInt(document.getElementById('fatorial').value);
    if(isNaN(valor))
    {
        alert("Insira valores válidos.");
        return;
    }
    let total = fatorial(valor);
    if(!isFinite(total) || total.toString().includes('e+'))
    {
        campo.innerHTML += `<p> Não foi possível calcular o fatorial de ${valor}. </p>`;
        return;
    }
    campo.innerHTML += `<p> O fatorial de ${valor} é ${total}. </p>`;
}

//IDADE

function idade() {
    const data_usu = new Date(prompt("Digite sua tada de nascimento, em MM/DD/YY"));
    const hoje = new Date();
    let dia1 = data_usu.getDate();
    let dia2 = hoje.getDate();
    let mes1 = data_usu.getMonth();
    let mes2 = hoje.getMonth();
    let ano1 = data_usu.getFullYear();
    let ano2 = hoje.getFullYear();

    let resultado = ano2 - ano1;

    if( mes2 < mes1 || (dia2 < dia1 && mes1 === mes2 ) ) {
        resultado--;
    }
    
    campo.innerHTML += `<p>Sua idade é ${resultado}</p>`;
}

// MAIUSCULO

function maiusculo() {
    var frase = document.querySelector('input#material').value;
    campo.innerHTML = `<p>${frase.toUpperCase()}</p>`;
}
function minusculo() {
    var frase = document.querySelector('input#material').value;
    campo.innerHTML = `<p>${frase.toLowerCase()}</p>`;
}

function normal() {
    var frase = document.querySelector('input#material').value;
    let tamanho = frase.length;
    let string = '';

    for(let i = 0; i < tamanho; i++) {
        if(i === 0 || frase[i - 2] == "." ) {
            string += frase[i].toUpperCase();
        }
        else {
            string += frase[i].toLowerCase();
        }
    }

    campo.innerHTML = `<p>${string}</p>`
}

// MEDIA

function media() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    if (isNaN(nota1) || isNaN(nota2)) {
        alert('Insira valores válidos(números)');
        return;
    }

    if (nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0) {
        alert(`Sua nota deve estar entre 1 e 10`);
        return;
    }
    var media = (nota1 + nota2) / 2;
    const result = document.querySelector("p");
    if (media >= 7) {
        result.innerHTML = [`Sua nota é ${media}, parabéns!`];
    }
    else if (media >= 3) {
        result.innerHTML = [`Sua nota é ${media}, faça a prova final.`];
    }
    else {
        result.innerHTML = [`Sua nota é ${media}, você reprovou.`];
    }
    body.appendChild(result);
    return;
}
function limpar() {
    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";
    const result = document.querySelector("p");
    result.innerHTML = "";
}

// PALINDROMOS

function verificar() {
    const palavra = document.querySelector('body > input[type="text"]').value.trim().toLowerCase();
    const palavra2 = palavra.split('').reverse().join('')

    if (palavra.localeCompare(palavra2) === 0) {
        campo.innerHTML += `<p>A palavra ${palavra} é um palíndromo</p>`
    }
    else {
        campo.innerHTML += `<p>A palavra ${palavra} não é um palíndromo</p>`
    }
}

// PAR

function teste() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Insira valores válidos(números)');
        return;
    }

    for (let i = 1; i < 3; i++) {
        let numero = i === 1 ? numero1 : numero2;
        if (numero % 2 == 0) {
            let duvida = "par";
            const resultado = document.querySelector(`p#resposta${i}`);
            resultado.innerHTML = `O número ${numero} é ${duvida}`;
        } else {
            let duvida = "ímpar";
            const resultado = document.querySelector(`p#resposta${i}`);
            resultado.innerHTML = `O número ${numero} é ${duvida}`;
        }
    }
    const compara = document.querySelector("p#comparar");
    if(numero1 > numero2)
    {
        compara.innerHTML = `O número ${numero1} é maior que o ${numero2}`;
    }
    else if(numero1 === numero2)
    {
        compara.innerHTML = `O número ${numero1} é igual ao ${numero2}`
    }
    else 
    {
        compara.innerHTML = `O número ${numero2} é maior que o ${numero1}`;
    }
}

// PRIMOS

function primo() {
    let numero_usuario = parseInt(document.querySelector('input#numero').value);


    let numero_primo = 1;
    for (let numero_geral = 2; true; numero_geral++) {
        if (numero_usuario == 1) {
            var resultado = 2;
            break;
        }
        for (let contador = 2; contador < numero_geral; contador++) {
            let resto = numero_geral % contador;
            if (resto == 0) {
                break;
            }
            if (resto != 0 && contador == numero_geral - 1) {
                numero_primo++;
            }
        }
        if (numero_primo === numero_usuario) {
            var resultado = numero_geral;
            break;
        }
    }
    campo.innerHTML += `<p>O número na posição ${numero_usuario} é ${resultado} </p>`
}

// TABUADA

function tabuada() {
    campo.innerHTML = "";
    const numero = parseInt(document.getElementById('numero').value);
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('final').value);

    if (isNaN(numero) || isNaN(inicio) || isNaN(fim)) {
        alert("insira valores válidos");
        return;
    }
    if(fim < inicio) {
        alert("o inicio deve ser menor que o fim");
        return;
    }
    for (let i = inicio; i <= fim; i++) {
        campo.innerHTML += `<p>${numero} X ${i} = <strong>${numero * i}</strong></p>`
    }
}