
function calcularIdade(path) {
    var dataAtual = new Date();
    var nascimento = document.getElementById('iptNasc');
    var sexo = document.getElementsByName('txtSexo');
    var imagemPessoa = document.getElementsByClassName('imgPessoa')[0];
    var paragrafoRes = document.getElementById('resultado-idade');
    
    if (Number(nascimento.value) > dataAtual.getFullYear() || Number(nascimento.value) < 1900 || nascimento.value.length == 0 ) {
        alert('Insira uma data de nascimento valida!');
        return;
    }
    var img = document.createElement('img');
    img.setAttribute('id', 'foto')
    var idade = dataAtual.getFullYear() - Number(nascimento.value);
    if (sexo[0].checked) {

        if (idade <= 3) {
            img.setAttribute('src', '_imagens-ex015/menino-bebe.jpg');
        } else if (idade <= 11) {
            img.setAttribute('src', '_imagens-ex015/menino-criança.jpg');
        } else if (idade <= 18) {
            img.setAttribute('src', '_imagens-ex015/menino-adolescente.jpg');
        } else if (idade <= 60) {
            img.setAttribute('src', '_imagens-ex015/menino-adulto.jpg');
        } else {
            img.setAttribute('src', '_imagens-ex015/menino-idoso.jpg');
        }
        paragrafoRes.innerHTML = `Detectamos homem com <strong>${idade}</strong> anos`;

    } else {
        if (idade <= 3) {
            img.setAttribute('src', '_imagens-ex015/menina-bebe.jpg');
        } else if (idade <= 11) {
            img.setAttribute('src', '_imagens-ex015/menina-criança.jpg');
        } else if (idade <= 18) {
            img.setAttribute('src', '_imagens-ex015/menina-adolescente.jpg');
        } else if (idade <= 60) {
            img.setAttribute('src', '_imagens-ex015/menina-adulta.jpg');
        } else {
            img.setAttribute('src', '_imagens-ex015/menina-idosa.jpg');
        }
        paragrafoRes.innerHTML = `Detectamos mulher com <strong>${idade}</strong> anos`;
    }
    paragrafoRes.style.textAlign = 'center';
    paragrafoRes.appendChild(img);
}