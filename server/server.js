const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const schema = require('./schema/schema');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle JWT
app.use((req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Unauthorized access' });
      req.user = decoded;
      next();
    });
  } else {
    next();
  }
});

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));
