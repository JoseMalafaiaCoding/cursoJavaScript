var iptNum = document.getElementById('iptNum');
var vetorNumeros = [];
var selAdd = document.getElementById('selAdd');
var divRes = document.getElementById('divResultado');

function adicionarNumero() {

    if(inVetor(iptNum.value) || isValidNumber()){
        alert('Digite um numero valido');
        return;
    }
    
    
    divRes.innerHTML = '';
    vetorNumeros.push(Number(iptNum.value))
    //vetorNumeros.sort((a,b) => a-b)
    var valorSel = document.createElement('option');
    valorSel.setAttribute('id', `optSel${vetorNumeros.length}`);
    valorSel.innerText = `Adicionado o valor ${iptNum.value}`;
    selAdd.setAttribute('size', vetorNumeros.length);
    selAdd.appendChild(valorSel);
    iptNum.value = '';
    iptNum.focus();
}

function isValidNumber(){
    return iptNum.value.length == 0 || Number(iptNum.value) > 100 || Number(iptNum.value) <= 0;
}

function inVetor(num){

    return (vetorNumeros.length != 0 && (Number(vetorNumeros.indexOf(Number(num))) != -1));
    //for(let i in vetorNumeros){
    //    if(Number(num) == vetorNumeros[i]){
    //        return true;
    //    }
    //}
    //return false;
}

function analisarNumeros() {
    if(vetorNumeros.length == 0){
        alert('Adicione algum valor');
        return;
    }
    divRes.innerHTML = '';
    var resultado = document.createElement('p')
    var soma = 0;
    let maior = vetorNumeros[0];
    let menor = maior;
    for(let i in vetorNumeros){
        soma += vetorNumeros[i];
        if(menor > vetorNumeros[i]){
            menor = vetorNumeros[i];
        }
        if(maior < vetorNumeros[i]){
            maior = vetorNumeros[i];
        }
    }
    
    var media = soma / vetorNumeros.length;
    resultado.innerText = `Ao todo temos ${vetorNumeros.length} números\u000D O maior valor informado foi ${maior} \u000D O menor valor informado foi ${menor} \u000D Somando todos os valores, temos ${soma} \u000D A média de todos os valores digitados é ${media}`
    divRes.appendChild(resultado);
}