const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      },
    },
  },
});

// Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const hashedPassword = await bcrypt.hash(args.password, 10);
        let user = new User({
          username: args.username,
          email: args.email,
          password: hashedPassword,
        });
        return user.save();
      },
    },
    loginUser: {
      type: GraphQLString,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const user = await User.findOne({ email: args.email });
        if (!user) throw new Error('User not found');
        const isMatch = await bcrypt.compare(args.password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');
        const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
        return token;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
