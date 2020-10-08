
window.onload = () => {
    var hora = new Date();
    var agora = hora.getHours();
    var imagem = document.getElementsByClassName('imgDia')[0];
    var tituloHora = document.querySelector('h2.titulo-hora');
    var corpo = document.getElementsByTagName('body')[0];
    tituloHora.innerHTML += ` ${agora} horas`;
    if (agora < 12) {
        imagem.src = '_imagens-ex014/sunset.jpg';
        corpo.style.backgroundColor = '#c0c253';
    } else if (agora < 18) {
        imagem.src = '_imagens-ex014/nightfall.jpg';
        corpo.style.backgroundColor = '#bd6942';
    } else {
        imagem.src = '_imagens-ex014/night.jpg';
        corpo.style.backgroundColor = '#2f2f8a';
    }
}

