import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000

app.get('/healthy', (req, res) => {
  res.send('Server is healthy');
})

// BOOKS
app.get('/books', (req, res) => {
  res.send('GET ALL BOOKS')
})

app.post('/books', (req, res) => {
  res.send('BOOK created')
})

app.put('/books', (req, res) => {
  res.send('BOOK UPDATED')
})

app.delete('/books', (req, res) => {
  res.send('book deleted')
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


