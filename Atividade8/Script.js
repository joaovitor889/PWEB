var idade = 0, mediaIdade = 0, idadeMaisVelha = 0, idadeMaisNova = 999, quantidadePessimo = 0, porCentagemOtimo = 0 , numHomens = 0 , numMulheres = 0;
var sexo, opniao;
var i = 0;

do{
    idade = parseInt(prompt("Digite a idade: "));
    sexo = String(prompt("Digite o seu sexo M - masculino F - feminino: "));
    opniao = parseInt(prompt("Qual a sua opnião 4-Otimo 3-Bom 2-Regular 1-Pessimo"));

    if (idade > idadeMaisVelha){
        idadeMaisVelha = idade;
    }
    if (idade < idadeMaisNova){
        idadeMaisNova = idade;
    }
    if(opniao == 4){
        porCentagemOtimo ++;
    }
    if(opniao == 1){
        quantidadePessimo ++;
    }
    (sexo == 'M')? numHomens++ : numMulheres++;

    mediaIdade += idade;

    i ++
}while(i<4);

mediaIdade /= 4;
porCentagemOtimo = (porCentagemOtimo*100)/4;

document.write("Media das idades: " + mediaIdade + "<br>" + "Mais Velho: " + idadeMaisVelha + "<br>" + "Mais Novo: " + idadeMaisNova + "<br>" + "Numero de Pessimos: " + quantidadePessimo + "<br>");
document.write("Numeros de homens: " + numHomens + "<br>" + "Numeros de Mulheres: " + numMulheres + "<br>" + "Porcentagem de otimo: " + porCentagemOtimo + "%")