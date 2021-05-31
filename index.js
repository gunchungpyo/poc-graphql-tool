import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefs } from './graphql/types/index.js';
import { resolvers } from './graphql/resolvers/index.js';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
