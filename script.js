const cartaTexto = document.getElementById('carta-texto');
const criarButton = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');

function gerarCarta() {
  if(cartaTexto.value.trim().length === 0) {
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  let textoDividido = cartaTexto.value.split(' ');
  cartaGerada.innerHTML = '';
  for(let i = 0; i < textoDividido.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = textoDividido[i];
    cartaGerada.appendChild(span);
  }
}

criarButton.addEventListener('click', gerarCarta);