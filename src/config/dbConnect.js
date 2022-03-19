import mongoose from 'mongoose';

mongoose.connect('<Sua conexão do mongo vai aqui!!>')

let db = mongoose.connection;

export default db;