function calcularTabuada(){

    var numero = document.getElementById('iptNum').value;
    var tab = document.getElementById('selTab');
    tab.innerHTML = '';
    if (numero.length.value == 0) {
        alert('Digite um numero');
        return;
    }
    for(var i = 0; i<=10; i++){
        let item = document.createElement('option');
        item.innerText = `${numero} X ${i} = ${numero * i}`;
        tab.appendChild(item);
        item.value = `tab${i}`;
        console.log(numero * i);
    }
}