const cartaTexto = document.getElementById('carta-texto');
const criarButton = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');

const estilos = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function gerarEstilo() {
  let classes = '';

  for (let i = 0; i < 4; i += 1) {
    classes += `${estilos[i][Math.floor(Math.random() * estilos[i].length)]} `;
  }

  return classes.trim();
}

function addEstilo(event) {
  let classes;
  const { target } = event;

  do {
    classes = gerarEstilo();
  } while (classes === event.target.className);

  target.className = classes;
}

function gerarCarta() {
  if (cartaTexto.value.trim().length === 0) {
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  const textoDividido = cartaTexto.value.trim().split(' ');
  cartaGerada.innerHTML = '';
  for (let i = 0; i < textoDividido.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = textoDividido[i];
    span.className = gerarEstilo();
    span.addEventListener('click', addEstilo);
    cartaGerada.appendChild(span);
  }

  contador.innerHTML = textoDividido.length;
}

criarButton.addEventListener('click', gerarCarta);
