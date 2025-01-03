// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);


// Ativar itens do orçamento

function ativarProtudo(parametro){
  const elemento = document.getElementById(parametro);
  if(elemento){
    elemento.checked = true;
  }
  console.log(elemento);
}

const parametros = new URLSearchParams(location.search);

parametros.forEach(ativarProtudo);

// let busca = parametros.search;
// console.log(parametros);




// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);
  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  // console.log(ativa);
  pergunta.setAttribute('aria-expanded', ativa);
  // console.log(resposta);

}
function eventosPerguntas(pergunta){
  // console.log(pergunta);
  pergunta.addEventListener('click', ativarPergunta);
}


perguntas.forEach(eventosPerguntas);