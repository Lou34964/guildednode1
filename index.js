const express = require('express');

const server = express();

server.use(express.json());

server.get("/", (req, res) =>{
  const dogs = [{id: 1, name:"Dogs Are Great!"}]

  res.status(200).json(dogs);
})

const port = 5000;
server.listen(port, () => console.log(`\n*** Server running on port: ${port}***\n`));