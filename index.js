import express from 'express';

const app = express();

app.listen('3000');

// ----- método get() ----- //
//app.route('/hello').get( (req, res) => res.send("hello"));
//app.route('/hello/sobre').get( (req, res) => res.send("ai minha voaida"));
//-----//

// ----- método post() ----- //
//>>> middleware > é a ponte entre as requisições, necessário para falar a API que estamos recebendo um JSON. A requisição primeiro passa pelo middleware pra entender o que está acontecendo e seguir o devido caminho.
//>>'use(express.json())' é utilizado para fazer esse 'middleware'. Neste caso ele vai pegar o conteúdo da 'req' e transformar em JSON.
//app.use(express.json());
//app.route('/').post( (req, res) => res.send(req.body));
//-----//

// ----- método put() ----- //
//>>>serve para editar informações
//let author = 'Microsoft'

//>>>middleware
//app.use(express.json());
//>>>método get() para verificar a informação antes do 'put()'
//app.route('/').get( (req,res) => res.send(author) )

//app.route('/').put( (req,res) => {
//    author = req.body.author;
//} );
//-----//


// ----- método delete() ----- //
//let author = 'Microsoft';
//>>> ':identificador' é o parâmetro que será recebido após o /
//app.route('/:identificador').delete( (req,res) => {
//    author = '';
    //>>> todo esse conteúdo vem dentro de req.params e que pode ser acessado com req.params.identificador
//    res.send( req.params.identificador + ' apagado!!!');
//} );
//-----//


// ----- parâmetros nas requisições ----- //

// --- pelo body --- //
//app.use(express.json());

//app.route('/').post( (req,res) => {
//    const { livros_favoritos } = req.body;
//    res.send(livros_favoritos[1]);
//} );

// --- pegando parâmetros pela rota (route params) --- //
//app.route('/:nome').get( (req,res) => res.send(`parametro logo após a barra : ${req.params.nome}`));
//app.route('/sobre/:nome').get( (req,res) => res.send(`o parâmetro será esperado após localhost:3000/sobre/aqui vem o parâmetro: ${req.params.nome}`));

// --- query params --- //
app.route('/').get( (req,res) => res.send(req.query));
app.route('/about/user').get( (req,res) => res.send( req.query.nome ) );