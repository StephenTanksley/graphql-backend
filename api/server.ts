import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import typeDefs from '../types';
import resolvers from '../resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  formatError: err => {
    return err;
  }
});

export default server;
