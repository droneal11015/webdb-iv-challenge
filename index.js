    
const express = require('express');
const server = express();
const dishesRouter = require('./routes/dishesRouter');
const recipesRouter = require('./routes/recipesRouter');

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.use('/dishes', dishesRouter);
server.use('/recipes', recipesRouter);

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
}); 