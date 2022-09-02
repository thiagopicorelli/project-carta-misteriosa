const cartaTexto = document.getElementById('carta-texto');
const criarButton = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');

const estilos = [
  ['newspaper', 'magazine', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
]

function gerarEstilo() {
  let ordem = {};
  let classes = '';

  const primeiroEstilo = Math.floor(Math.random() * 4);
  ordem[primeiroEstilo] = true;
  if (primeiroEstilo === 0) { // Para garantir que haja no mínimo dois estilos
    ordem[primeiroEstilo + 1] = true;
  } else {
    ordem[primeiroEstilo - 1] = true;
  }

  for (let i = 0; i < 2; i += 1) {
    ordem[Math.floor(Math.random() * 4)] = true;
  }

  for (const key of Object.keys(ordem)) {
    if(isNaN(key)) {
      continue;
    }

    const keyn = parseInt(key);
    
    classes += estilos[keyn][Math.floor(Math.random() * estilos[keyn].length)] + ' ';
  }

  return classes.trim();
}

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
    span.className = gerarEstilo();
    cartaGerada.appendChild(span);
  }

  gerarEstilo();
}

criarButton.addEventListener('click', gerarCarta);