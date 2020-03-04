import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import rootQuery from './modules/rootQuery';
import rootMutation from './modules/rootMutation';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'rootQueryType',
    fields: {
      ...rootQuery,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'rootMutationType',
    fields: {
      ...rootMutation,
    },
  }),
});
