var num = new Array(3);

num[0] = parseInt(prompt('Digite o primeiro numero: '));
num[1] = parseInt(prompt('Digite o segundo numero: '));
num[2] = parseInt(prompt('Digite o terceiro numero: '));

function maiorNum (num){
    return Math.max.apply(null, num);
}

function ordenar (num){
    return num.sort(function(a,b){return a-b});
}
document.write('<h2> O maior numero é ' + maiorNum(num) + '</h2>');
document.write('<h2>'+ordenar(num)+'</h2>');