class Retangulo{
    constructor(x, y){
        this._x = x;
        this._y = y; 
    }
    calcArea() {
        return (this._y * this._x);
    }
}

var reatangulo1 = new Retangulo(2, 2);

document.write(`<h1>A área do retangulo é: ${reatangulo1.calcArea()}</h1>`);

class Conta{
    constructor (nome, bank, num, saldo){
        this._nome = nome;
        this._bank = bank;
        this._num = num;
        this._saldo = saldo;
    }
    get nome(){
        return this._nome;
    }
    get bank(){
        return this._bank;
    }
    get num(){
        return this._num;
    }
    get saldo(){
        return this._saldo;
    }
    set nome(value){
        this._nome = value;
    }
    set bank(value){
        this._bank = value;
    }
    set num(value){
        this._num = value;
    }
    set saldo(value){
        this._saldo = value
    }

}
class Corrente extends Conta{
    constructor(nome, bank, saldo, num, saldoEsp){
        super(nome, bank, saldo, num);
        this._saldoEsp = saldoEsp;
    }
    set saldoEsp(value){
        this._saldoEsp = value;
    }
    get saldoEsp(){
        return this._saldoEsp;
    }

}

class Poupança extends Conta{
    constructor(nome, bank, saldo, num, juros, dataVenc){
        super(nome, bank, saldo, num);
        this._juros = juros;
        this._dataVenc = dataVenc;
    }
    set juros(value){
        this._juros = value;
    }
    set dataVenc(value){
        this._dataVenc = value;
    }
    get juros(){
        return this._juros;
    }
    get dataVenc(){
        return this._dataVenc;
    }
}

var conta1 = new Corrente();

conta1.nome = 'João';
conta1.bank = 'xxxx';
conta1.saldo = 100.00;
conta1._num = 1234;
conta1.saldoEsp = 2000.00

document.write(`<h2>Nome: ${conta1.nome} <br>
Banco: ${conta1.bank} <br>
Saldo: ${conta1.saldo}<br>
Numero: ${conta1.num}<br>
Saldo Especial: ${conta1.saldoEsp}</h2>`);

var conta2 = new Poupança();

conta2.nome = 'João';
conta2.bank = 'xxxx';
conta2.saldo = 100.00;
conta2._num = 4321;
conta2.juros = '2%';
conta2.dataVenc = '01/02';

document.write(`<h2>Nome: ${conta2.nome} <br>
Banco: ${conta2.bank} <br>
Saldo: ${conta2.saldo}<br>
Numero: ${conta2.num}<br>
Juros: ${conta2.juros}</br>
Data de Vencimento: ${conta2.dataVenc}</h2>`);