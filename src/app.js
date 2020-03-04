import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import schema from './schema';

const { NODE_ENV, MONGO_URI } = process.env;

const server = new ApolloServer({
  schema,
  playground: NODE_ENV === 'development',
});

mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export default server;
