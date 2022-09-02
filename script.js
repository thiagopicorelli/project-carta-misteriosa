const cartaTexto = document.getElementById('carta-texto');
const criarButton = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');

function gerarCarta() {
  console.log('test');
  let textoDividido = cartaTexto.value.split(' ');

  cartaGerada.innerHTML = '';
  for(let i = 0; i < textoDividido.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = textoDividido[i];
    cartaGerada.appendChild(span);
  }
}

criarButton.addEventListener('click', gerarCarta);