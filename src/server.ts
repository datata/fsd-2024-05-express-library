import 'dotenv/config';
import express from 'express';
import { createAuthor, deleteUserById, updateAuthorById } from './controllers/author.controller';
import { createBook, deleteBookById, getAllBooks, updateBookById } from './controllers/book.controller';

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

// BOOKS
app.get('/books', getAllBooks)
app.post('/books', createBook)
app.put('/books', updateBookById)
app.delete('/books', deleteBookById)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


