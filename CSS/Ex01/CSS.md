#### Linguagem de Estilização para o HTML

```css
SELETOR{
   PROPRIEDADE: VALOR;
}
```

```css
Onde:

Seletor: É o alvo da regra css, o componente que se deseja estilizar;

Propriedade: É o atributo/característica do componente que desejamos configurar;

Valor: É a qualificação do atributo
```

### Exemplo

```css
h1{
   color: red;
   Font-family: “Times New Roman”;
}
```

### Comentários em CSS
/* Este é um comentário válido em uma folha de estilos */


### Seletor Por ID
```html
<h2 id="subtitulo">Subtitulo aqui</h2>
```
```css
#subtitulo{
   PROPRIEDADE: VALOR;
}
```

### Seletor Por classe
```html
<h2 class="subtitulo">Subtitulo aqui</h2>
```
```css
.subtitulo{
   PROPRIEDADE: VALOR;
}
```

### Seletor Universal

```css
*{
}
```

### Seletor de Atributos

```html
<input type="text">
<input type="number">
```
```css
input[type=text]{
   background-color: blue;
}

input[type=number]{
   background-color: red;
}
```

### Seletor Composto

```css

Todos as tags P dentro da classe container 
serão atingidos pelo estilo

.container p{
   background-color: blue;
}
```

```html
<div class="container">
   <p>Parágragrafo filho direto</p>
   <div>
      <p>Parágragrafo filho indireto também será atingido pelo alvo</p>
   </div>
</div>
```


### Seletor de filho

```css

Somente a tag P que for filha direta do 
container vai ser estilizada

.container > p{
   background-color: blue;
}
```

```html
<div class="container">
   <p>Parágragrafo filho direto</p>
   <div>
      <p>Não será atingido</p>
   </div>
</div>
```

### Seletor de Irmão Adjacente

```css
.container3 > p + h2{
   color: green;
}
```
```html
<div class="container3">
   <p>Parágrafo filho direto</p>
   <h2>Titulo atingido</h2>
   <div>
      <p>Parágrafo filho indireto não será atingido</p>
   </div>
   <h2>Este título não será atingido</h2>
</div>
```


### Tipos de Estilos
- Inline
```html
<h2 style="color:blue; background-color:green"> Meu título</h2>
```
- Incorporados
```html
<head>
   <style>
   h2{
      color:blue;
      background-color:#ccc;
   }
   .container{
      margin-left: 10px;
   }
   </style>
</head>
```
- Importadas
```html
<head>
   <link rel="stylesheet" href="ARQUIVO.css">
</head>
```

### Efeito Cascata Prioridade de Estilização

1 -> Navegador Padrão
2 -> Importadas
3 -> Incorporadas
4 -> Inline
5 -> Declarações do usuário com ```!important;```

### Box Model Caixa
- Todos os elementos HTML são colocados dentro de uma caixa que usualmente chamamos de "Box Model". 

```text

Propriedades do Box Model

Margin: Margem do element. Esta é a área fora da borda do elemento. Esta região é transparente.

Border: Borda do element. Esta área pode ser preenchida com uma cor específica.

Padding: Espaçamento entre a borda e o conteúdo do elemento.
Content: Área do conteúdo do elemento propriamente dito. Quando definimos um comprimento e uma largura
para um determinado elemento estamos na realidade informando as dimensões de comprimento e largura do
‘content’.

Através do CSS podemos utilizar as propriedades do box model para estilizarmos um componente.

```

### Width e Height

```css

/* Afeta a largura */
width: 200px;

/* Afeta a altura */
height: 200px;
```

### Margin

```css

/* Aplica margem externa do elemento igualmente para todos os lados */
margin: 10px;

/* Aplica margem de 10px em cima em baixo e 20px na esquerda e direita */
margin: 10px 20px;


/* Aplica um valor em cada lado no sentido horario começando por cima */
margin: 10px 5px 9px 15px;


/* Aplica margem só no lado informado */
margin-top: 1px;
margin-bottom: 1px;
margin-left: 1px;
margin-right: 1px;

```

### Border
```css
/* Forma reduzida passando as tres propriedades*/
border: 5px solid black;

/* Passando o tamanho da borda */
border-top-width:20px;
border-left-width: 10px;
border-right-width: 10px;
border-bottom-width: 5px;

/* A cor da borda */
border-top-color:black;
border-left-color: red;
border-right-color: green;
border-bottom-color: yellow;

/* O estilo da borda */
border-top-style:solid;
border-left-style: dashed;
border-right-style: double;
border-bottom-style: groove;
```
### Padding
```css

/* Aplica espacamento interno do elemento igualmente para todos os lados */
padding: 10px;

/* Aplica espacamento interno de 10px em cima em baixo e 20px na esquerda e direita */
padding: 10px 20px;

/* Aplica um valor em cada lado no sentido horario começando por cima */
padding: 10px 5px 9px 15px;

/* Aplica espacamento interno só no lado informado */
padding-top: 1px;
padding-bottom: 1px;
padding-left: 1px;
padding-right: 1px;
```

### Arredondamento Border-Radius

```css
/* Arredonda igualmente para todos os lados */
border-radius: 10px;

/* Arredonda unicamente para o canto informado */
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;

```

### Box Shadow
```css
/*É utilizada para aplicar um efeito de sombra sobre uma borda. 
Esta propriedade é defina através de 4 valores
que indicam respetivamente a distância horizontal 
em relação a borda, a distância vertical em relação a borda,
o raio da borda e por fim a cor a ser utilizada.
Exemplo:*/

/* Aplica uma sombra indo 5px para a direita -5px para cima com
esfumaçamento de 20px com a cor vermelha */
box-shadow: 5px -5px 20px red;
```

### Box-Sizing
```css
/* A propriedade CSS box-sizing é utilizada para alterar a propriedade padrão da box model, usada para calcular
larguras (widths) e alturas (heights) dos elementos. */

/* Essa é o estilo padrão. As propriedades width (largura) e height (altura) são medidas incluindo só o conteúdo,
mas não o padding, border ou margin. */
box-sizing: content-box;

/* As propiedades de largura (width) e de altura (height) incluem o tamanho padding size, mas não incluem a
propriedade border ou margem. */
box-sizing: padding-box;
 
/*As propiedades de largura (width) e de altura (width) incluem o tamanho padding size e a
propriedade border, mas não incluem a propriedade margin. */
box-sizing: border-box;
```

### Elementos em bloco e em linha

```css
Elementos de Bloco
/* Elementos de bloco ou ‘block elements’ são elementos que por padrão aparecem um abaixo do outro, possuindo
uma quebra de linha antes e após a sua inclusão. */
display: block;

Elementos de Linha
/* Elementos de linha ou ‘inline elements’ são elementos que por padrão aparecem um ao lado do outro, não
possuindo quebras de linha antes ou após a sua inclusão. */
display: inline-block;
```

### Tipografia
```css
1. Fonte Arial
2. Fonte Arial Black 
3. Fonte Comic Sans MS 
4. Fonte Courier New 
5. Fonte Georigia 
6. Fonte Impact 
7. Fonte Times New Roman 
8. Fonte Trebuchet MS 
9. Fonte Verdana
10.Fonte sans-serif;
```

```css
/* Mudar a fonte */
font-family: NomeDaFonte;

/* Espaçamento entre as letras */
letter-spacing: 10px;

/* Espaço entre palavras */
word-spacing: 10px;

/* Altura da linha */
line-height: 10px;
```

### Alinhamento de Texto
```css

/* Alinha texto verticalmente */
vertical-align: valor;

/* Alinhar horizontalmente */
text-align: valor;

/* Define o tamanho da identação do primeiro parágrafo do texto */
text-ident: 10px;
```

### Efeitos de texto
```css

/* remove decoração de texto e links */
text-decoration: none;

/* Colocar linha em baixo do texto */
text-decoration:underline;

/* Colocar linha em cima do texto */
text-decoration:overline;

/* Colocar linha atraves do texto */
text-decoration:line-through;
```

### Converter texto

```css
/* Remove transofação do texto */
text-transform:none;

/* A primeira letra de cada palavra fica maiuscula e o resto minuscula */
text-transform:capitalize;

/* Tudo maiusculo */
text-transform:uppercase;

/* Tudo minusculo */
text-transform:lowercase;
```

### Estilo de fonte
```css
/* Remove efeitos */
font-style:normal;
/* Coloca em italico */
font-style:italic;

/* Coloca em obliquo */
font-style:oblique;
```

### Grossura da fonte
```css
font-weight: normal;

/* Negrito médio */
font-weight: bold;

/* Negrito forte */
font-weight: bolder;

/* Fina */
font-weight: lighter;

/* Personalizado */
font-weight: um valor numérico entre 100 e 700;
```

### Tamanho da fonte
```css
/* Tamanho da fonte */
font-size: 10px;
```

### Background

```css
/* Mudar cor de fundo */
background-color: red;

/* Colocar foto de fundo */
background-image:url('fundo.png')


/*Informa se a imagem de fundo deve repetir caso não tenha o tamanho da tela*/
background-repeat:repeat;
background-repeat:repeat-x;
background-repeat:repeat-y;
background-repeat:no-repeat;

/*A propriedade background-attachment é utilizada para indicar se a imagem permanecerá fixa ou se deve rolar
juntamente com a tela.
Os valores possíveis são: */

background-attachment :scroll;
background-attachment :fixed;
```

### Estilizando Links

```css
/* utilizando uma tag a do html como link temos acessos a algumas propriedades no css para estilizar cada estado do link */

a:link -> link no estado inicial

a:visited -> link já visitado

a:hover -> mouse está sobre o elemento

a:active -> quando está com o mouse pressionado sobre o link

```

### Listas
```css
/* Define o tipo de marcados a ser utilizado pela lista */

list-style-type:disc;
list-style-type:circle;
list-style-type:square;
list-style-type:decimal;
list-style-type:decimal-leading-zero;
list-style-type:lower-roman;
list-style-type:upper-roman;
list-style-type:georgian;
list-style-type:armenian;
list-style-type:lower-alpha/lower-latin;
list-style-type:upper-alpha/upper-latin;
list-style-type:greek;
list-style-type:none;
```

### Posicionamento
```css
/* Por padrão os elementos de bloco, divs por exemplo, são colocados um abaixo do outro em um documento html. */

/* Entretanto, algumas vezes faz-se necessário que alguns elementos flutuem para a direita ou para esquerda,
saindo do fluxo normal do documento. */

/* Para conseguirmos este comportamento devemos utilizar a propriedade float */

float:none: não flutua, comportamento padrão.

float:left: flutua o componente para a esquerda;

float:right: flutua o componente para a direita;


/* Após utilizar o float os proximos elementos podem causar alguns
tipos de problemas de posicionamento para resolver este problema
utilizamos a propriedade clear para limpar o float do elemento seguinte*/
clear: left;
clear: right;
clear: both;
```

### Posicionamentos
```css
/* Este posicionamento não altera a forma de posicionamento dos elementos. Para mudarmos a posição do
elemento devemos utilizar as propriedades top, left, right e bottom. */
position:relative;

/* O posicionamento absoluto retira o elemento do fluxo normal de posicionamento. Esta configuração indica que
o elemento deve ser posicionado a partir da posição do elemento pai utilizando as propriedades top, left, right
e bottom */
position:absolute;

/* O posicionamento fixo é um caso especial do posicionamento absoluto. Neste tipo de posicionamento o
elemento irá se posicionar de modo fixo em relação a área de renderização do documento. */
position:fixed;

/* Posicionamentos */
top: 0;
left: 0;
right: 0;
bottom: 0;
```

### Flexbox
```css
/*Modelo de layout novo do CSS3 flexivel que nos permite deixarmos
o site muito mais dinâmico e responsivo nos elemetos */

As configurações serão normalmente definidas no elemento pai e refletirão para os elementos filhos.

display: flex; -> Habilita o flexbox

/* Dita qual a direção que o flexbox precisa posicionar seus elementos filhos */
flex-direction: row,row-reverse,column,column-reverse;

/* Dita se o texto ou item deve descer se não houver mais espaço na tela. */
flex-wrap: wrap, no-wrap;


/*Define o alinhamento em relação ao eixo horizontal*/
justify-content: center,start,end,space-around,betwee,space-evenly;

/* Define o alinhamento em relação ao eixo vertical.
Os valores possíveis são: */
align-items:flex-start,flex-end,center,baseline


/* PROPRIEDAES A SEREM COLOCADAS NOS ELEMENTOS FILHOS */

order
/* Indica a ordem em que o elemento deve aparecer dentro do container. */

flex-grow
/* Indica a habilidade do elemento crescer se necessário para ocupar o espaçamento do elemento pai. */

flex-shrink
/* Indica a capacidade do elemento encolher se necessário. */

flex-basis
/* Define o tamanho padrão de um elemento antes do espaço restante ser distribuído. */

flex
/* Forma simplificada para a atribuição dos valores referente as propriedades flex-grow, flex-shrink e flex-base. O
valor padrão é 0 1 auto; */

align-self
/* Define o alinhamento do elemento em relação ao eixo y, sobrescrevendo o valor da propriedade align-items
para o elemento corrente. */

```

### Animações e Transições
```css
/* O comando transition do CSS é capaz de criar animações simples trabalhando com as dimensões dos
componentes, cores, sombras, margens, entre outras características. */
transition;

/* Há cinco comandos que precisamos aprender para trabalhar com as transições do CSS que são: */
1. transition /*forma abreviada para utilizar todos eles*/
2. transition-delay /*Delay até começar a animação*/
3. transition-duration /*Tempo da animação*/
4. transition-property /*Qual propriedade sofre animação*/
5. transition-timing-function /*Define a suavidade*/


Animation
/* O comando Animation, é muito familiar com as transitions, que tem como objetivo criar transições de largura,
altura, margens, entre outras opções.

A grande vantagem das animações perante as transições é a possibilidade de manipular mais elementos e
realizar mais de uma transição. */

/* Anteriormente fizemos alguns exemplos com a largura e a altura de uma div, mas imagine que você queira que
ela aumente as suas dimensões e depois diminua, em seguida gire em 360º e ainda mude de cor. Parece loucura,
mas as animações do CSS conseguem fazer isso, diferente das transitions, que são mais limitadas. */

1. @keyframes /*Cria a animação*/
2. animation-name /*Nome da animação*/
3. animation-duration /*Duração da animação*/
4. animation-delay /*Tempo de delay para começar*/
5. animation-iterarion-count /*Quantas vezes vai rodar por exemplo infinite*/
```

### Criando uma animação
```css
@keyframes exemplo{
   from{
      background-color:red;
   }
   to{
      background-color: blue;
   }
}

animation-name: exemplo;
animation-duration: 4s;


@keyframes exemplo2{
   0%{
      background-color:red;
      margin-left: 10px;
   }
   20%{
      background-color:blue;
      margin-left: 0px;
   }
   40%{
      background-color:yellow;
      margin-left: 30px;
   }
   60%{
      background-color:brown;
      margin-left: 0px;
   }
   80%{
      background-color:green;
      margin-left: 5px;
   }
   100%{
      background-color:purple;
      margin-left: 100px;
   }
}
```

### Outras Pseudo-Classes para estudar
```css
:active
:checked
:default
:dir()
:disabled
:empty
:enabled
:first
:first-child
:first-of-type
:fullscreen
:focus
:hover
:indeterminate
:in-range
:invalid
:lang()
:last-child
:last-of-type
:left
:link
:not()
:nth-child()
:nth-last-child()
:nth-last-of-type()
:nth-of-type()
:only-child
:only-of-type
:optional
:out-of-range
:read-only
:read-write
:required
:right
:root
:scope
:target
:valid
:visited
```
