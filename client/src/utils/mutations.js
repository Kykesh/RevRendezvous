import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $ridingExperience: String!               # Add ridingExperience as a required string
    $motorcycleDetails: MotorcycleDetailsInput! # Assuming motorcycleDetails is a custom input type
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      ridingExperience: $ridingExperience    # Include the new field in the mutation
      motorcycleDetails: $motorcycleDetails  # Include the new field in the mutation
    ) {
      token
      user {
        _id
        username
        email
        firstName
        lastName
        ridingExperience                     # Return these fields if necessary
        motorcycleDetails {
          type
          engineSize
        }
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation AddEvent($eventName: String!, $eventDescription: String!, $eventDate: String!, $location: String!, $eventFee: Float, $isCharitable: Boolean) {
    addEvent(eventName: $eventName, eventDescription: $eventDescription, eventDate: $eventDate, location: $location, eventFee: $eventFee, isCharitable: $isCharitable) {
      _id
      eventName
    }
  }
`;
