import { gql } from "@apollo/client";

export const queryGetAllPets = gql`
  query getAllPets {
    pets {
      data {
        attributes {
          picture {
            data {
              attributes {
                url
              }
            }
          }
          parent
          parentContact
          species {
            data {
              attributes {
                name
              }
            }
          }
          petAge
          email
          location
          breed
          gender
        }
      }
    }
  }
`;
