import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
import NodeMailerType from './objects/nodemailer'
import NodeMailerResolver from './resolvers/node-mailer-resolver'

const RootQuery = new GraphQLObjectType({
  fields: {
    NodeMailer: {
      args: {
        to: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (parentVal, args) {
        return NodeMailerResolver(args)
      },
      type: NodeMailerType
    }
  },
  name: 'Root_Query'
})

export default RootQuery
