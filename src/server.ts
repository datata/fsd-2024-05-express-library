import 'dotenv/config';
import express from 'express';
import { createAuthor, deleteUserById, getAllAuthors, updateAuthorById } from './controllers/author.controller';
import { createBook, deleteBookById, getAllBooks, updateBookById } from './controllers/book.controller';
import { AppDataSource } from './database/db';

const app = express();

// middleware
app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/healthy', (req, res) => {
  // res.send('Server is healthy');

  res.status(200).json(
    {
      success: true,
      message: 'Server is Healthy'
    }
  )
})

//  AUTHORS
app.post('/authors', createAuthor)
// rutas dinamincas usamos req params
app.put('/authors/:id', updateAuthorById)
app.delete('/authors/:id', deleteUserById)
app.get('/authors', getAllAuthors)

// BOOKS
app.get('/books', getAllBooks)
app.post('/books', createBook)
app.put('/books', updateBookById)
app.delete('/books', deleteBookById)

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
  })


