/*1.*/ 
let elementOndevoceEsta = document.querySelector('#elementoOndeVoceEsta');

/*2*/
let parentNodeColor = elementOndevoceEsta.parentElement;
let irmao = document.createElement("div");
irmao.id = 'irmao';
parentNodeColor.appendChild(irmao);
irmao.innerText = "Irmão Novo";
parentNodeColor.style.color = 'green';

/*3*/
let firstChild = elementOndevoceEsta.firstElementChild;
let filhoElementoOndeVoceEsta = document.createElement("div");
filhoElementoOndeVoceEsta.id = 'filho de ondeVoceEsta';
elementOndevoceEsta.appendChild(filhoElementoOndeVoceEsta);
filhoElementoOndeVoceEsta.innerText = 'filho do Elemento';
firstChild.innerText = "Primeiro Filho do Filho";

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let bisneto = document.createElement('div');
bisneto.id = 'bisneto';
primeiroFilhoDoFilho.appendChild(bisneto);
bisneto.innerText = 'Bisneto';


    


/*4*/
let primeiroFilho = parentNodeColor.firstElementChild; 
primeiroFilho.innerText = "Primeiro Filho";

/*5*/
let primeiroFilho2 = elementOndevoceEsta.previousElementSibling;
primeiroFilho2.innerText = "Segundo Filho";

/*6*/
let textElement = elementOndevoceEsta.nextSibling;
textElement.innerText = "Elemento de Texto";

/*7*/
let terceiroFilho = bisneto.parentElement.parentElement.nextElementSibling;
terceiroFilho.innerText = "Terceiro filho";
console.log(terceiroFilho);
/*8*/
let terceiroFilho2 = parentNodeColor.lastElementChild.previousElementSibling;
terceiroFilho2.innerText = "Terceiro filho 2";
