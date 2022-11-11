import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../resolvers/resolvers";

const typeDefs = `

    type Query{
        Users:[User]
    }

    type Task{
        _id: ID
        description: String!
        number: Int
    }

    type User{
        _id:ID
        firstname: String!
        lastname: String!
        age: Int!
    }

    input TaskInput{
        description: String!
        number: Int        
    }

    input UserInput{
        firstname: String!
        lastname: String!
        age: Int!
    }

    type Mutation{
        createUser(input:UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id:ID, input:UserInput):User
    }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
