import express from 'express';

const app = express();

// middleware
app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/healthy', (req, res) => {
  res.send('Server is healthy');
})

//  AUTHORS
app.post('/authors', (req, res) => {
  // recuperar la informacion de la req
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.nationality);

  res.send('CREATE AUTHOR')
})

// rutas dinamincas usamos req params
app.put('/authors/:id', (req, res) => {
  console.log(req.params.id);
  
  res.send(`AUTHOR UPDATED with id: ${req.params.id}`)
})

app.delete('/authors/:id', (req, res) => {
  res.send(`AUTHOR DELETED BY ID ${req.params.id}`)
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


