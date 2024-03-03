import { gql } from "@apollo/client";

export const mutationSetNewPet = gql`
  mutation mutationSetNewPet(
    $parent: String!
    $parentContact: Long!
    $species: ID!
    $pictureId: ID!
    $petage: Int!
    $email: String!
    $location: String!
    $breed: String!
    $gender: ENUM_PET_GENDER!
    $publishedAt: DateTime!
  ) {
    createPet(
      data: {
        parent: $parent
        parentContact: $parentContact
        picture: $pictureId
        species: $species
        petage: $petage
        email: $email
        location: $location
        breed: $breed
        gender: $gender
        publishedAt: $publishedAt
      }
    ) {
      data {
        id
        attributes {
          parent
          parentContact
          species {
            data {
              attributes {
                name
              }
            }
          }
          petage
          email
          location
          breed
          gender
        }
      }
    }
  }
`;

export const mutationUploadFile = gql`
  mutation uploadFile($file: Upload!) {
    upload(file: $file) {
      data {
        id
      }
    }
  }
`;
