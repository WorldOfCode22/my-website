import { GraphQLObjectType, GraphQLBoolean } from 'graphql'

const NodeMailerType = new GraphQLObjectType({
  fields: {
    emailSent: { type: GraphQLBoolean }
  },
  name: 'NodeMailer'
})

export default NodeMailerType
