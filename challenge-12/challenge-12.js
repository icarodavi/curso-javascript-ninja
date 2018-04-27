(function() {/*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person = {
  name: 'Icaro',
  lastname: 'Monteiro',
  age: 31
  };
  console.log( 'Propriedades de "person": ', person );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  var props = Object.keys(person);

  console.log(props);
  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push({name: 'Livro 1', pages: 100});
  books.push({name: 'Livro 2', pages: 100});
  books.push({name: 'Livro 3', pages: 100});
  console.log( '\nLista de livros:' );

  /*
  Mostre no console todos os livros.
  */
  console.log(books);

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  var removido = books.pop();
  console.log(removido);
  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  console.log( '\nLivros em formato string:' );

  books = JSON.stringify(books);
  /*
  Mostre os livros nesse formato no console:
  */
  console.log(books);

  /*
  Converta os livros novamente para objeto.
  */
  books = JSON.parse(books);
  console.log( '\nAgora os livros são objetos novamente:' );
  console.log(books);
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */

  for (var i = 0; i < Object.keys(books).length; i++) {
    for (x in books[i]) {
      console.log(x+': '+books[i][x]);
    }
  }
  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['I','c','a','r','o',' ','D','a','v','i',' ','T','a','v','a','r','e','s',' ','M','o','n','t','e','i','r','o'];
  console.log( '\nMeu nome é:' );
  console.log(myName.join(''));
  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  myName.reverse();

  console.log( '\nMeu nome invertido é:' );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.join(''));

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort());
})();
