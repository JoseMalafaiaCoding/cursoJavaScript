function contar() {
    var inicio = document.getElementById('iptInicio');
    var fim = document.getElementById('iptFim');
    var passo = document.getElementById('iptPasso');
    var resultado = document.createElement('p');
    var docRes = document.getElementById('divRes');
    docRes.innerHTML = '';
    if (!inicio.value || !fim.value) {
        alert('Digite valores válidos para início e fim');
        return;
    } else if (!passo.value || passo.value <= 0) {
        alert(`Passo não pode ser vazio, iniciando contador com passo 1`);
        passo.value = 1;
    }
    for (var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
        resultado.innerText += `${i} \u{1F449} `;
    }

    for (var j = Number(inicio.value); j >= Number(fim.value); j -= Number(passo.value)) {
        resultado.innerText += `${j} \u{1F449} `;
    }
    resultado.innerText += `\u{1F3C1}`
    docRes.appendChild(resultado);

}