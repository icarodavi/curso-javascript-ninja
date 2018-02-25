# Desafio da semana 3#

````js
// Declarar uma variável qualquer, que receba um objeto vazio.
<<<<<<< HEAD
var obj = {};
=======
var objeto = {};
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {
	nome: 'Icaro',
	sobrenome: 'Monteiro',
	sexo: 'Masculino',
	idade: 30,
<<<<<<< HEAD
	altura: 1.65,
=======
	altura: 1.85,
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1
	peso: 80,
	andando: false,
	caminhouQuantosMetros: 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
<<<<<<< HEAD
pessoa.fazerAniversario = function() {
	pessoa.idade += 1;
=======
pessoa.fazerAniversario = function () {
	pessoa.idade++;
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function(mt) {
	pessoa.caminhouQuantosMetros += mt;
	pessoa.andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function() {
	pessoa.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function() {
<<<<<<< HEAD
	return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome;
=======
	return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome + '!';
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function() {
	return 'Olá, eu tenho ' + pessoa.idade + ' anos!';
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function() {
	return 'Eu peso ' + pessoa.peso + 'Kg.';
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function() {
<<<<<<< HEAD
	return 'Minha altura é ' + pessoa.altura + 'm.';
=======
	return 'Minha altura é ' + pessoa.altura +'m.';
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
<<<<<<< HEAD
pessoa.nomeCompleto(); // 'Olá! Meu nome é Icaro Monteiro'
=======
// 'Olá! Meu nome é Icaro Monteiro!'
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarIdade(); //'Olá, eu tenho 30 anos!'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
<<<<<<< HEAD
pessoa.mostrarPeso(); //'Eu peso 80Kg.
=======
80 //pessoa.mostrarPeso();


>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1
/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
<<<<<<< HEAD
pessoa.mostrarAltura(); //'Minha altura é 1.65m.'
=======
1.85 //pessoa.mostrarAltura();

>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
<<<<<<< HEAD
pessoa.mostrarIdade(); //'Olá, eu tenho 33 anos!'
=======
33 //pessoa.mostrarIdade();
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
<<<<<<< HEAD
pessoa.andar(1);
pessoa.andar(2);
pessoa.andar(7);
=======
pessoa.andar(3);
pessoa.andar(7);
pessoa.andar(10);
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
<<<<<<< HEAD
pessoa.andando //true
=======
Sim //pessoa.andando
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
<<<<<<< HEAD
pessoa.andando //false
=======
Não //pessoa.andando
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
<<<<<<< HEAD
pessoa.caminhouQuantosMetros //10
=======
20 //pessoa.caminhouQuantosMetros
>>>>>>> 841f658ba8ef0024f1455cc7b1e44f34daf5a6e1

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = function() {
	var sexo = '';
	var anos = '';
	var metros = '';
	if (pessoa.sexo === 'Masculino') {
		sexo = 'o';
	} else {
		sexo = 'a';
	}
	if (pessoa.idade === 1) {
		anos = 'ano';
	} else { 
		ano = 'anos'; 
	}
	if (pessoa.caminhouQuantosMetros === 1) {
		metros = 'metro';
	} else { 
		metros = 'metros';
	}
	return 'Olá, eu sou '+ sexo + ' ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + anos + ', ' + pessoa.altura
 + 'm, meu peso é ' + pessoa.peso + ' e, só hoje, eu já caminhei ' + pessoa.caminhouQuantosMetros + ' ' + metros + '!';
}

// Agora, apresente-se ;)
pessoa.apresentacao() // 'Olá, eu sou o Icaro Monteiro, tenho 33, 1.65m, meu peso é 80 e, só hoje, eu já caminheiro 10 metros!'
```
