const kitty = document.querySelector('.kitty');
const pipe = document.querySelector('.pipe');
const button = document.querySelector('.btn-tryagain');
const contador = document.querySelector('.contador');
const recorde = document.querySelector('.recorde')
const changeMap = document.querySelector('.change-Map')
const gameBoard = document.querySelector(".game-board")
const mensagem = document.querySelector(".mensagem")
let loop;
let scoreInterval;

let scoreRecorde = 0;
let score = 0;
alert("Feliz aniversário. é simples mas espero que aproveite este mini-game que fiz pra ti porque fiquei a madrugada fazendo ksks <3 COLOQUEI TUA FOTO ALI PRA VC FOCAR NESSA GOSTOSA E PERDER O GAME HEHE")
alert("e como nao posso te levar em um almoço, eu quis fazer algo diferente e que você pudesse recordar ")

// Função para iniciar ou reiniciar o jogo
const startGame = () => {
  // Reiniciar as animações
  pipe.style.animation = '';
  pipe.style.left = '';
  kitty.style.animation = '';
  kitty.style.bottom = '';
  button.style.display = 'none';

  // Reiniciar o score
  score = 0;
  contador.textContent = score;

  // Reiniciar o loop de verificação
  
  if (loop) {
    clearInterval(loop);
  }
  if (scoreInterval) {
    clearInterval(scoreInterval);
  }

  loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const kittyPosition = +window.getComputedStyle(kitty).bottom.replace('px', '');

    if (pipePosition <= 115 && pipePosition > 0 && kittyPosition < 84) {
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;
      kitty.style.animation = 'none';
      kitty.style.bottom = `${kittyPosition}px`;
      button.style.display = 'block';

      clearInterval(loop); // Parar o jogo
      clearInterval(scoreInterval); // Parar o contador de score
    }
  }, 10);

  // Iniciar o contador de score
  scoreInterval = setInterval(() => {
    score += 1;
    contador.textContent = `Atual: ${score}`;;

    if (score > scoreRecorde) {
      scoreRecorde = score;
      recorde.textContent = `Recorde: ${scoreRecorde}`;
    }
    //console.log(score);
    //console.log( contador.textContent);
  }, 10);
};

// Função para fazer o gato pular
const jump = () => {
  kitty.classList.add('jump');

  setTimeout(() => {
    kitty.classList.remove('jump');
  }, 500);
};

const clickPular = () => {
  kitty.classList.add('jump');

  setTimeout(() => {
    kitty.classList.remove('jump');
  }, 500);
}


const chooseMap = () => {
  const numberMap = Math.floor(Math.random() * 3) + 1;
  console.log(numberMap);
  gameBoard.style.backgroundImage = `url("img/cenario${numberMap}.gif")`;

  mensagem.textContent = "DESCULPE PELA QUALIDADE RUIM. NÃO CONSEGUI ACHAR GIF COM QUALIDADE BOA NESSE TAMANHO";
  setTimeout(() => {
    mensagem.textContent = "";
  }, 5000);


}
changeMap.addEventListener('click', chooseMap)
// Event para o botão de reiniciar o jogo

button.addEventListener('click', startGame);

// Event  para o pulo do gato
document.addEventListener('keydown', jump);

// Iniciar o jogo pela primeira vez
startGame();

