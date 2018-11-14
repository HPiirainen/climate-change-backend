import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type Population {
    date: String
    value: Int
  }

  type Country {
    id: String
    iso2Code: String
    name: String
    capitalCity: String
    populations: [Population]
  }

  type Query {
    allCountries: [Country]
    country(iso2Code: String!): Country
    populations: [Population]
  }

`;

export default typeDefs;
