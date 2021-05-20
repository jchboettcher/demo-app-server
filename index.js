const { ApolloServer } = require('apollo-server')
const typeDefs = require('./src/graphql/typeDefs')
const resolvers = require('./src/graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: true,
    credentials: true,
  }
});

// The `listen` method launches a web server.
server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
