import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type Population {
    date: String
    value: Int
  }

  type Emission {
    date: String
    value: Float
  }

  type Country {
    id: String
    iso2Code: String
    name: String
    capitalCity: String
    populations: [Population]
    emissions: [Emission]
  }

  type Query {
    allCountries: [Country]
    country(iso2Code: String!): Country
  }

`;

export default typeDefs;
