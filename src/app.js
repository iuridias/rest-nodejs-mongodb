import express from 'express';
import db from './config/dbConnect.js';
// import livros from './models/Livro.js';
import routes from './routes/index.js' 

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso.');
})

const app = express();

app.use(express.json());

routes(app);

// const livros = [
//   {id: 1, titulo: 'O Senhor dos Anéis'},
//   {id: 2, titulo: 'O Hobbit'}
// ]
// app.delete('/livros/:id', (req, res) => {
//   let {id} = req.params;
//   let index = buscaLivro(id);
//   livros.splice(index, 1);
//   res.status(201).json(`Livro ${id} removido com sucesso.`);
// });

// function buscaLivro(id) {
//   return livros.findIndex(livro => livro.id == id);
// }

export default app;