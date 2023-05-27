# O que é HTML?

-  HTML é a sigla para Hypertext Markup Language (Linguagem de marcação de hipertexto).

-  Ao contrário do que muitos pensam, HTML não é uma linguagem de programação, mas sim um conjunto de tags para marcação de texto. Esse conjunto de tags é interpretado pelos navegadores para a visualização de um documento através da
   web.

---

# O que é HTML5?

-  HTML 5 foi o nome dado à quinta versão da especificação do html.

---

# Estrutura básica do html

```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8" />
      <title>Document</title>
   </head>

   <body>
      <!--Corpo do site-->
   </body>
</html>
```

`<!DOCTYPE html>` - Esta marcação indica que o documento a seguir segue a especificação html da versão 5, ao contrário das versões anteriores, o doctype para o html 5 é pequeno.

<br>

`<html></html>` - Indica a abertura do documento html. Todo o conteúdo do documento deve ficar entre as tags html

`<head></head>` - Indica a abertura do cabeçalho do documento. Normalmente o conteúdo adicionado dentro do cabeçalho é utilizado para fins de passar informações ao browser sobre o conteúdo que virá no documento. As informações do head não são visíveis diretamente no documento, mas são utilizadas pelo browser e por robôs para a indexação do documento.

`<title></title>` - Utilizada para a demarcação do título do documento. O conteúdo colocado entre a tag title não é renderizado no corpo do documento, mas é utilizado pelo navegador para informar o título da página em sua aba superior.

`<meta charset=”UTF-8”>` - Tag de meta dados utilizada para definir qual o tipo de encode foi utilizado pelo documento no momento de sua criação.

`<body></body>` - Indica o início do corpo do documento. Todo o conteúdo que será apresentado ao usuário deve estar contido
dentro dele.

---

# Tipos de tags HTML

-  A especificação HTML nos apresenta várias tags/elementos que são utilizados com os mais variados propósitos, entretanto, podemos agrupar essas tags/elementos em alguns grupos.

### Elementos Containers

-  São tags/elementos utilizados para agrupar outros elementos de forma lógica, estes elementos normalmente delimitam partes do documento e tem como característica a quebra de linha antes e após a sua demarcação.

Exemplos:

```html
<p>Paragrafo</p>

<div>Divisão do site</div>
```

### Elementos in-line

-  São tags/elementos utilizados normalmente para a formatação do texto, aplicando ao documento certo grau de estilização. São denominados in-line por não apresentarem quebra de linha no documento, não alterando seu direcionamento.

Exemplos:

```html
<strong>Deixa o texto em negrito</strong>

<span>pedaço de texto</span>
```

### Elementos de Imagem e Multimídia

-  São elementos utilizados para a inclusão de imagem, som e vídeo dentro de um documento html.

Exemplos:

```html
<img src="LINK DA IMAGEM" />

<audio src="LINK DO AUDIO" autoplay controls></audio>

<video src="LINK DO VIDEO" autoplay controls></video>
```

### Elementos de Script

-  São utilizados para a inclusão de scripts ao documento para posterior processamento do navegador.

Exemplos:

```html
<script>
   Código JavaScript
</script>

<canvas> Renderização dinâmica de graficos </canvas>
```

### Elementos de Meta Dados

-  São utilizados para adicionarem informações referente ao documento e são utilizados normalmente pelo navegador e por robôs de indexação de páginas.

Exemplos:

```html
<meta charset="UTF-8" />
```

---

# Tags Container parte 1

### Elementos de Cabeçalho

-  As tags de cabeçalho são elementos utilizados para definir tamanhos diferentes para a definição de um
   cabeçalho ou título. As tags utilizadas para esse propósito são:

```html
<h1>Titulo h1</h1>
<h2>Titulo h2</h2>
<h3>Titulo h3</h3>
<h4>Titulo h4</h4>
<h5>Titulo h5</h5>
<h6>Titulo h6</h6>
```

### Elemento de parágrafo

-  Para demarcarmos um parágrafo utilizamos a tag `<p></p>`

```html
<p>Primeiro parágrafo</p>

<p>
   O Brasíl é o maior país da América do Sul e da América Latina, sendo o quinto
   maior país do mundo em área territorial
</p>

<p>Terceiro parágrafo</p>
```

### Elemento div

-  O elemento div é utilizado para criarmos uma divisão lógica dentro do documento html, normalmente utilizado o elemento div para demarcação do layout da página.

```html
<div>
   <h2>Título da notícia 01</h2>
   <p>Descrição da notícia 01 vai aqui.</p>
</div>

<div>
   <h2>Título da notícia 02</h2>
   <p>Descrição da notícia 02 vai aqui.</p>
</div>
```

---

# Tags Container parte 2

### Elemento header

A tag `<header></header>` é uma tag de contexto semântico introduzida no HTML5 para demarcar o cabeçalho de uma secção do documento. O elemento header pode ser utilizado para englobar cabeçalhos h1-h6 juntamente com outros elementos tais como imagens, ou links de navegação

```html
<header>
   <h3>Título vai aqui</h3>
</header>
```

### Elemento main

-  A tag `<main></main>` é uma tag de contexto semântico introduzida no HTML5 para demarcar o conteúdo principal do
   documento.

```html
<main>
   <h1>Título do conteúdo principal</h1>
   <p>Conteúdo principal</p>
</main>

<div>
   <h3>Título do conteúdo secundário</h3>
   <p>Conteúdo secundário</p>
</div>
```

### Elemento footer

-  A tag `<footer></footer>` é uma tag de contexto semântico introduzida no HTML5 para demarcar o rodapé de uma secção qualquer do documento.

```html
<footer>
   <p>Rodapé do documento vai aqui</p>
</footer>
```

### Elemento section

-  A tag `<section></section>` é uma tag de contexto semântico introduzida no HTML5 para demarcar uma secção genérica do documento. O elemento section pode ser utilizado para englobar cabeçalhos h1-h6 juntamente com outros elementos.

```html
<section>
   <p>Conteúdo definido dentro de uma section</p>
</section>
```

### Elemento article

-  A tag <article> é uma tag de contexto semântico introduzida no HTML5 para demarcar uma composição
   independente dentro do documento. Normalmente utilizamos o elemento article como um elemento agrupador de conteúdo, podendo criar internamente subdivisões com outras tags, tais como header, section, footer entre outras.

```html
<article>
   <header>
      <h3>Título do artigo vai aqui</h3>
   </header>
   <section>
      <p>Conteúdo definido dentro de uma section</p>
   </section>
</article>
```

### Elemento aside

-  A tag <aside> é uma tag de contexto semântico introduzida no HTML5 para demarcar uma seção de conteúdo tangencialmente relacionado ao conteúdo principal e que poderia ser considerado como conteúdo separado. Este tipo de seção é muito utilizado para conter explicações laterais, tais como definição e glossário ou avisos. Em aplicações web também é utilizado para demarcação de informações de perfil ou links de conteúdos relacionados.

```html
<article>
   <header>
      <h3>Mamímeros marinhos</h3>
   </header>
   <section>
      <p>
         Constituem uma designação comum aos mamíferos aquáticos, sirênios, como
         os dugongos,mas da família dos triquequídeos(Trichechidae).
      </p>
      <p>
         Possuem um grande corpo arredondado, com aspecto semelhante ao das
         morsas.<br />
         O peixe-boi-marinho (Trichechus manatus) pode medir até quatro metros e
         pesar 800 quilos, enquanto o peixe-boi-da-amazônia (Trichechus
         inunguis)pode chegar ate 2,5 metros e pode pesar até 300 quilos
      </p>
   </section>
   <aside>
      <h4>Você sabia?</h4>
      <p>
         Além do peixe boi da peixe-boi-da-amazônia existem mais duas espécies
         de peixe boi.
      </p>
   </aside>
</article>

<aside>
   <h4>Conheça outros mamíferos marinhos</h4>
   <a href="#">Baleias</a><br />
   <a href="#">Leão marinho</a><br />
</aside>
```

---

# Listas

### Listas não ordenadas

-  Elemento `ul` - esta tag é utilizada para englobar os elementos pertencentes a uma lista não ordenada.

-  Elemento `li` - A tag é utilizada para a definição de um item de uma lista. Este elemento é utilizado em conjunto com o elemento `ul e ol`.

```html
<h3>Lista de animais</h3>

<ul>
   <li>Cachorro</li>
   <li>Gato</li>
   <li>Peixe</li>
</ul>
```

### Listas ordenadas

-  A tag `<ol>` é utilizada para definir uma lista ordenada.

```html
<h3>Ordem de chagada dos candidatos</h3>

<ol>
   <li>Johnny</li>
   <li>Matheus</li>
   <li>João</li>
   <li>Maria</li>
</ol>
```

---

# Tabelas

-  `<table></table>` - é utilizada para englobar os elementos pertencentes a uma tabela.

-  `<caption></caption>` - é utilizada para definir um título para a tabela.

-  `<thead></thead>` - é utilizada para definir o cabeçalho da tabela.

-  `<tbody></tbody>` - é utilizada para definir o corpo da tabela.

-  `<tfoot></tfoot>` - é utilizada para definir o rodapé da tabela.

-  `<tr></tr>` - é utilizada para definir uma linha da tabela.

-  `<th></th>` - é utilizada para definir uma coluna dentro do thead

-  `<td></td>` - é utilizada para definir uma coluna dentro do tbody.

```html
<table>
   <caption>
      Dados dos contatos
   </caption>
   <thead>
      <tr>
         <th>Nome</th>
         <th>Email</th>
         <th>Telefone</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>João</td>
         <td>joao@teste.com.br</td>
         <td>33221100</td>
      </tr>
      <tr>
         <td>maria</td>
         <td>maria@teste.com.br</td>
         <td>33221101</td>
      </tr>
   </tbody>
   <tfoot>
      <tr>
         <td colspan="2">total de contatos</td>
         Anotações 32 Capítulo 06 – Tabela
         <td>2</td>
      </tr>
   </tfoot>
</table>
```

# Elementos de estilização de texto

### Elemento Strong

-  É uma tag utilizada para delimitar um texto que se deseja dar maior destaque. Na prática, os navegadores web aplicam um negrito sobre o texto contido pelo elemento.

```html
<p>Exemplo da <strong>tag Strong</strong></p>
```

### Elemento b

-  (bold) é utilizada para definir um trecho de texto que se deseja aplicar negrito.

```html
<b>Exemplo da <strong>tag B</strong></b>
```

### Elemento i

-  (italic) é utilizada para definir um trecho de texto que se deseja aplicar o estilo itálico.

```html
<p>Texto que está em <i>Italico</i></p>
```

### Elemento small

-  É utilizada para renderizar um trecho texto com o tamanho da fonte um pouco menor que o tamanho dos demais elementos.

```html
<p>Exemplo de texto <small>pequeno!</small></p>
```

### Elemento u

-  É utilizada para definir um trecho de texto com o estilo sublinhado.

```html
<p><u>Texto sublinhado aqui!</u></p
```

### Elemento s

-  É utilizada para definir um trecho de texto com o estilo taxado (riscado).

```html
<p>Promoção camisa polo de <s>R$29.90</s> por apenas R$14.80</p>
```

### Elemento br

-  É utilizada para aplicar uma quebra de linha no texto.

```html
<p>
   O mundo é um lugar perigoso de se viver, <br />
   não por causa daqueles que fazem o mal,<br />
   mas sim por causa daqueles que observam<br />
   e deixam o mal acontecer.<br />
   <strong>Albert Einstein</strong>
</p>
```

### Elemento code

-  É utilizada para representar um fragmento de código. Por padrão os navegadores apresentam
   seu conteúdo com uma fonte monoespaçada.

```html
<p><code>var sum = 2 + 2;</code></p>
```

### Elemento mark

-  É utilizada para marcar um trecho de texto.

```html
<p>Exemplo de <mark>marcação</mark></p>
```

---

# Formulário

### Elemento Form

-  É utilizada para demarcar o conteúdo de um formulário.

-  Este elemento possui dois atributos importantes que são:
   -  action: indica qual é a ação a ser processada no servidor.
   -  method: indica a forma de envio dos dados. Os valores válidos para estes atributos são `GET` ou `POST`

```html
<form action="salvar" method="POST"></form>
```

### Elemento Fieldset

-  É um elemento utilizado para demarcar um agrupamento de dados no formulário.

```html
<fieldset></fieldset>
```

### Elemento Legend

-  É o elemento utilizado para demarcar o título de um fieldset.

```html
<fieldset>
   <legend>Titulo do fieldset</legend>
</fieldset>
```

### Elemento Label

-  É um elemento utilizado para demarcar o marcador de um campo do formulário.

```html
<label>texto dentro de um formulario</label>
```

---

# Elemento INPUT

-  É utilizado para apresentar um campo de entrada de dados de um formulário. A tag input é extremamente versátil podendo renderizar vários tipos de entrada de dados apenas alterando o valor do atributo type.

```html
<input type="text" /> Representar um texto

<input type="email" /> representar um email

<input type="checkbot" /> representar uma caixa de marcação

<input type="radio" /> representar um grupo de seleção

<input type="number" /> representar um campo de numero

<input type="password" /> representar um campo de senha

<input type="file" /> representar um campo de arquivo

<input type="reset" /> representar um botão de limpar campos de um formulario

<input type="submit" /> representar um botão de envio de um formulario

<input type="tel" /> representar um campo de telefone

<input type="button" /> representar um botão

<input type="hidden" /> representar um campo de entrada oculto
```

Além do atributo type, o elemento input apresenta os seguintes atributos também muito utilizados:

-  `name`: define um nome para o campo. Este nome é utilizado pelo servidor para ler o valor do campo no formulário.

-  `value`: utilizado para definir um valor para o campo

-  `placeholder`: utilizado para apresentar um exemplo de texto

-  `required`: utilizado para indicar se o valor do campo é obrigatório

-  `readonly`: utilizado para indicar se o valor do campo é somente para leitura, sem que o usuário possa
   editar esse valor.

---

### Elemento Button

-  É utilizada para criar um botão clicável.

```html
<button>Botão</button>
```

### Elemento Select

-  É utilizada para criar um elemento contendo um menu de opções. Este elemento normalmente é utilizado em conjunto com as tags `option`

```html
<select>
   <option value="1">Cachorro</option>
   <option value="2">Gato</option>
</select>
```

### Elemento textarea

-  É utilizada para criar um elemento que permite ao usuário digitar um texto.

```html
<textarea></textarea>
```

### Elemento Progress

-  É utilizada para criar um elemento que apresenta uma barra de progresso.

```html
<progress value="70" max="100">70%</progress>
```

---

# Navegação

### Elemento a

-  É utilizada para criar um ponto de ancoragem e navegação para um outro ponto do documento ou para um novo documento. Para que o elemento habilite a estilização de link, é necessário que seja
   informado um valor para o atributo `href` deste elemento.

```html
<a href="https://www.google.com.br">Link para o google</a>
```

---

# Elementos Script

### Elemento noscript

-  É utilizada para definir uma seção html no caso de algum script não ser suportado pelo navegador.

```html
<noscript>
   <p>Seu navegador não suporta o javascript</p>
</noscript>
```

### Elemento Script

-  É utilizada para definir um bloco de código javascript.

```html
<script>
   alert('Olá mundo');
</script>

<script src="caminho arquivo javascript"></script>
```

---
