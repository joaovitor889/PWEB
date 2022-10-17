var jogadaUser;
var jogadaMachine;
var result;

jogadaUser = parseInt(prompt("Escolha 0- Pedra, 1- Tesoura, 2- Papel"));
jogadaMachine = Math.floor(Math.random()*3);

result = (jogadaUser == jogadaMachine)? "empate" : ((jogadaMachine == 1 && jogadaUser == 3) || (jogadaMachine == 3 && jogadaUser == 2) || (jogadaMachine == 2 && jogadaUser == 1))? "Jogador venceu": "Jogador perdeu"

alert(result);