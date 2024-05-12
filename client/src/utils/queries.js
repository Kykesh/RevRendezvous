import { gql } from '@apollo/client';

export const USER_PROFILE = gql`
  query UserProfile {
    user {
      _id
      firstName
      lastName
      username
      email
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      username
      email
      profileImage
      motorcycleDetails {
        type
        engineSize
      }
      ridingExperience
      preferences
    }
  }
`;

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      _id
      eventName
      eventDescription
      eventDate
      location
      host {
        _id
        username
      }
      participants {
        _id
        username
      }
      eventFee
      isCharitable
    }
  }
`;
