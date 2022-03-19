import express from 'express';
import LivroController from '../controllers/livrosController.js'

const router = express.Router();

router
  .get('/livros', LivroController.listarLivros)
  .get('/livros/busca', LivroController.listarLivrosPorEditora)//sempre da mais especifica para a menos especifica
  .get('/livros/:id', LivroController.listarLivro)
  .post('/livros', LivroController.cadastrarLivros)
  .put('/livros/:id', LivroController.atualizarLivro)
  .delete('/livros/:id', LivroController.excluirLivro)



export default router;