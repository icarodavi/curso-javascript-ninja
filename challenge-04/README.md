# Desafio da semana #4

````js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x) {
	if (x) {
		return true;
	} else { 
		return false;
	}
} 

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(false);
isTruthy(-0);
isTruthy('');
isTruthy(null);
isTruthy(undefined);
isTruthy("");

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('a');
isTruthy('b');
isTruthy('c');
isTruthy(10);
isTruthy(true);
isTruthy('ninja');
isTruthy('java');
isTruthy('script');
isTruthy('Ok');

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
	marca: 'Fiat',
	modelo: 'Bravo',
	placa: 'OIK-1111',
	ano: 2013,
	cor: 'cinza',
	quantasPortas: 4,
	assentos: 5,
	quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(x) {
	carro.cor = x;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
	return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
	return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
	return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
	return 'Esse carro é um ' + carro.marca + ' ' + carro.modelo;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionaPessoas = function (x) {
	var vagas = (carro.assentos - carro.quantidadePessoas);
	if (carro.quantidadePessoas === carro.assentos) {
		return 'O Carro já está lotado!';
	} else {
		if (vagas === 1 && x > vagas) {
			return 'Só cabe mais 01 pessoa!';
		} else if (x > vagas) {
			return 'Só cabem mais ' + vagas + ' pessoas!';
		}
		if (x <= vagas) {
			carro.quantidadePessoas += x;
			return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
		}
	}
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); _'cinza'_

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); _'vermelho'_

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?
carro.obterCor(); _'verde musgo'_

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); _'Esse carro é um Fiat Bravo'_

// Adicione 2 pessoas no carro.
carro.adicionaPessoas(2); _'Já temos 2 pessoas no carro!'_

// Adicione mais 4 pessoas no carro.
carro.adicionaPessoas(4); _'Só cabem mais 3 pessoas!'_

// Faça o carro encher.
carro.adicionaPessoas(3); _'Já temos 5 pessoas no carro!'_

// Tire 4 pessoas do carro.
carro.quantidadePessoas = 1;

// Adicione 10 pessoas no carro.
carro.adicionaPessoas(10); _'Só cabem mais 4 pessoas!'_

// Quantas pessoas temos no carro?
carro.quantidadePessoas //1
```
