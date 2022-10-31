class aluno1{
    constructor(nome, ra){
        this.nome = nome;
        this.ra = ra;
    }
};

aluno1Formato1 = new aluno1('Bruno', '1234');
document.write('<h2>'+aluno1Formato1.nome + aluno1Formato1.ra +'</h2>');

function aluno2(nome, ra){
    this.nome = nome;
    this.ra = ra;
}
aluno2Formato2 = new aluno2('João', '4321');
document.write('<h2>'+aluno2Formato2.nome + aluno2Formato2.ra +'</h2>');

var aluno3Formato3 = {};
aluno3Formato3.nome = 'Ricardo';
aluno3Formato3.ra = '54323';

document.write('<h2>'+aluno3Formato3.nome + aluno3Formato3.ra +'</h2>');