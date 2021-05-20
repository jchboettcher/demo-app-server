const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
  }

  type Query {
    allVaccines: [Vaccine!]!
    userById(id: ID!): User!
  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    createdAt: String!
    updatedAt: String!
  }

  type Vaccine {
    id: ID!
    name: String!
    state: String!
    createdAt: String!
    updatedAt: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
  }
`
