# Projeto Buscador de CEP 

Projeto criado com [Create React App](https://github.com/facebook/create-react-app).

## Como rodar o projeto

Para rodar o projeto será necessario a intalação do Node.JS e do React JS.
Ao baixar o reposotitorio acesse a pasta raiz do mesmo através do terminal e use o comando abaixo.

### `npm start`

Ele será aberto em um igual o parecido com o exemplo abaixo, podendo mudar a porta caso a máquina já esteja usando a porta 3000.

Link -> [http://localhost:3000](http://localhost:3000)

A página será atualizada automaticamente quando você realizar alguma alteração.
Você também ira conseguir ver erros no console.

### `npm run build`

Esse comando compila o codigo para uma pasta build.
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser hospedado!

Você pode ver mais sobre isso na página [deployment](https://facebook.github.io/create-react-app/docs/deployment) 

### Como usar

Para usar o projeto é simples, basta informar o CEP que deseja pesquisar, caso esse CEP exista o site irá retornar as informações disponíveis.

### Objetivo do projeto

Esse projeto tem como objetivo fornecer algumas informações de qualquer CEP do Brasil.
Ele será usado como exemplo no seminário sobre React JS.

### Softwares necessários para construção da aplicação

1-Node.JS
2-React JS
3-Visual Studio Code (Opcional)

### Passo a passo para criação da aplicação

#### 1- Passo

Escolha um diretorio de sua preferência e através do CMD execute o seguinte comando **"npx create-react-app buscador"**.
"buscador" pode ser substituido por outro nome de sua preferência, esse será o nome do projeto.
Após criar o projeto crie abra o mesmo no Visual Studio Code ou um editor de codigo de sua preferência.
Ao abrir o projeto abra um terminal na pasta do mesmo e rode o comando **"npm start"**, com isso seu projeto será iniciado
de forma local e sempre que você fizer uma modificação ele ira atualizar automaticamente.
Ele vai aparecer dessa forma na primeira vez que você rodar.

![image](https://user-images.githubusercontent.com/88061007/161661468-ffe15814-1cbb-4dcf-92c9-984448b6358e.png)

#### 2- Passo

Agora você vai excluir alguns arquivos que não iremos usar:

1 - App.css

2- App.test.js localizado na pasta src.

3- logo.svg

4 - SetupTestes.js

5 - reportWebVital.js

O nosso diretório vai ficar assim.

![image](https://user-images.githubusercontent.com/88061007/161662023-e61576c5-b184-45b7-8712-e0fd6f7da56c.png)

### 3- Passo

Iremos aplicar um seletor global onde iremos aplicar um margin e padding 0.
Também iremos definir uma fonte que será a "sans-serif".
Tudo isso no arquivo index.css

![image](https://user-images.githubusercontent.com/88061007/161662327-3f07ab9e-c276-43b3-9e37-c0a6cd2f3e9a.png)

### 4- Passo

Agora vamos mexer no arquivo App.js que o componente principal onde iremos trabalhar, vamos fazer um corpo do nosso 
aplicativo antes de fazer a parte funcional que buscar um CEP.
Dentro do return iremo criar uma div com o nome container, dentro dessa div vai ter o conteúdo do nosso site. Na div
container teremos o título do nosso site site chamado "Buscador CEP", esse título estará dentro de uma tag title.

Dentro da div anterior iremos criar outra div chamada "containerInput", ela será responsável por receber o número do CEP 
buscado e retornar os dados da função "handleSearch" que iremos criar mais tarde.
Nela iremos usar uma tag "input" do tipo texto para criar um campo para o usuário preencher. Dentro da tag input teremos um 
placeholder escrito "Digite o seu CEP...".

### Ficando exatamente como a imagem abaixo

![image](https://user-images.githubusercontent.com/88061007/161664124-eae7b0f5-b3a4-45e2-966c-79c5b9e45944.png)

### 5- Passo

Agora iremos criar um botão com a tag "button" dentro da div "containerInput", esse botão irá receber um className de 
"buttonSearch".
Como icone deste botão iremos usar uma biblioteca do própio react chamada React Icons, para instalar ela abra o terminal no 
diretório do projeto e execute o seguinte comando **"npm install react-icons --save"**, ele irá instalar todas as 
dependências do React Icons no seu projeto. Para usala iremos acessar a biblioteca de itens disponíveis no link : 

Link -> https://react-icons.github.io/react-icons

Basta selecionar uma categoria e clicar no icone desejado assim irá copiar seu código e podemos usar ele na applicação.

Você deve importalo no início do código assim:

![image](https://user-images.githubusercontent.com/88061007/161664959-58fb7dce-0147-4edb-8d6f-08ebf0d5b270.png)

Isso pode mudar um pouco de acordo o icone que selecionar.

Seu botão vai ficar assim.

![image](https://user-images.githubusercontent.com/88061007/161665052-3f4799b4-a348-47e5-9bf6-dc9068a459f7.png)

### 6- Passo

Agora iremos estilizar o código já produzido, não entraremos muito em detalhes nessa parte pois não é o foco do nosso 
projeto.

Tudo isso será feito no arquivo styles.css que deve ser importado no nosso App.js

Irei deixar o meu estilo, mas fiquem a vontade para modificarem e fazerem o de vocês.

![image](https://user-images.githubusercontent.com/88061007/161665365-6a4b4555-62e5-46b2-b929-32141bc64606.png)

![image](https://user-images.githubusercontent.com/88061007/161665397-eaa14d8f-b72f-40bb-9ad3-52dadebefe24.png)

![image](https://user-images.githubusercontent.com/88061007/161665418-c66ba5db-a07f-460a-8de1-3067544f9cfe.png)

Essa parte é responsável por deixar o nosso site reponsivo.

![image](https://user-images.githubusercontent.com/88061007/161665442-804901ad-6e52-489a-a6d8-838cbd5c7e68.png)

### 7- Passo

Agora iremos criar a parte funcional de nossa aplicação.
Nós precisamos armazenar os dados quando o nosso usuário digitar algo, precisamos de algo dinâmico e quando falamos disso 
em react, estamos falando de Hooks então vamos lá para o nosso useState. Vamos importar ele, e criar dentro do nosso function App.

![image](https://user-images.githubusercontent.com/88061007/161666109-4acb930a-cdea-47ad-aa61-a273a55ccfbc.png)

Vamos chamar ele de input, o setInput é a função que temos para trocar o valor do nosso input, ou seja alterar o valor desse
estado, quando chamamos apenas o input queremos o valor dele e quando chamamo setInput queremos modificar esse valor.

E o código irá ficar assim.

![image](https://user-images.githubusercontent.com/88061007/161666220-4ca02088-a0a3-45ff-9519-4a4cfd2e149b.png)

Nosso useState irá começar vazio.

Dentro da nossa tag de input, iremos passar agora algumas propiedades e uma delas é o "value" que estará atrelado ao nosso 
valor de input, agora vamos chamar a função onChange que como o própio nome já diz ele será invocado sempre que algo mudar 
ali. Nele passaremos um evento e nesse evento chamamos o nosso setInput com o parametro "evento.target.value", agora tudo que 
o usuário digitar iremos passar para o nosso input. 

Agora o nosso input ficará assim.

![image](https://user-images.githubusercontent.com/88061007/161666943-7107dd6c-4b1d-4ddf-b290-04a4f375c4bb.png)

### 8- Passo

Agora vamos conhecer a API que iremos usar para o nosso código. Que é a ViaCEP, você pode conhecer mais sobre ela
no link abaixo:

Link -> https://viacep.com.br/

Para conseguir trabalhar com essa API teremos que instalar uma biblioteca chamada Axios, para intalar ela vá no diretório do 
projeto e execute através do CMD o comando **"npm install axios"**.

Dentro da pasta **src** iremos criar uma pasta chamada **services** e dentro dela um arquivo chamado **Api.js**.

Primeiro passo é importar o axios e depois iremos configurar a nossa base url, com ela vamos conseguir concatenar os dados 
fornecidos pelo usuário e assim acessar a nossa API. Não se esqueça de exportar o nosso arquivo.

Na imagem a seguir temos um exemplo em forma de comentario de como a nossa url da api funciona, com isso podemos entender 
melhor como a nossa função de pesquisa vai funcionar, passaremos a nossa baseURL para ela e depois iremos concatenar com 
o CEP fornecido e o /jason/.

O código irá ficar assim.

![image](https://user-images.githubusercontent.com/88061007/161667923-14d63130-20a0-4dd5-9bd2-1707a75b6f58.png)

### 9- Passo

Agora iremos criar a nossa função handleSearch no App.js, para usarmos ela será necessário importar a nossa api não se 
esqueça disso
ficará assim o nosso import:

**import api from './services/Api';**

Primeira coisa que iremos fazer é verificar se o nosso usuário digitou algo, para isso usaremos um if se caso não tenha 
sido inserido nada emitermos um alerta.

Agora iremos abrir um bloco try catch, no nosso try ficará o código que pode ser passivo de erro e no catch a nossa mensagem 
de erro. Como é uma requisição em uma API e isso pode demorar um pouco iremos transforma a nossa função em uma função 
assincrona, para isso basta adicionar um "assync" antes da palavra "function". Agora no nosso try iremos criar uma const 
chamada "response" que ira receber os dados da nossa API. Esse responde será igual a um await para ele esperar essa 
requisição com um **api.get(input + "/json")** isso irá juntar o nosso input com o a nossa baseURL com o /json. Iremos 
colocar no nosso catch um alerta de erro seguido de um setInput vazio, caso o CEP buscado esteja errado ira mostrar um alerta 
e iremos limpar o campo de texto.

Agora vamos criar uma constante para armazenar as informações armazenadas ela irá se chamar cep e tera um setCep, esse 
useState ira iniciar como um objeto vazio. Abaixo da linha de response iremos chamar o setCep passando como parametro o 
response.data que é onde fica os nossos dados retornados ficando algo assim: **setCep(response.data)**, também iremos inserir 
um setInput vazio para limpar o campo.

O código ficará assim: 

![image](https://user-images.githubusercontent.com/88061007/161669610-c527b9e9-2e72-4759-8945-335e31309e73.png)

### 10- Passo

Agora na nossa tag main iremos usar um h2 para mostrar o CEP e tags de span para as outras informações. Usaremos o campo 
cep."nome do campo" para mostrar a informação, cep é onde está armazenado as nossa informações. 

Tudo isso irá ficar dentro de uma Object.keys onde passaremos o atributo cep e iremos chegar se ele está vazio ou não, se ele 
não estiver vazio exibimos as informações. Isso serve para que ao abrir o site pela primeira vez não apareça a caixa de 
resposta vazia.

O código do main ficará assim

![image](https://user-images.githubusercontent.com/88061007/161670568-34fe2448-c38a-4f23-a76c-03b1d1c5b360.png)


Após tudo isso o nosso site já deve funcionar.
