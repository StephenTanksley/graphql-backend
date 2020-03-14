import { ApolloServer } from 'apollo-server'
import typeDefs from '../types'
import resolvers from '../resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

export default server
