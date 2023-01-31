import { gql } from 'graphql-request';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const retrieveUser = gql`
  query RetrieveUser($id: ID!) {
    retrieveUser(id: $id) {
      id
      name
      birthday
      email
      password
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const retrieveAllUsers = gql`
  query RetrieveAllUsers {
    retrieveAllUsers {
      id
      name
      birthday
      email
    }
  }
`;
