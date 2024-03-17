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
export const queryGetHealth = gql`
  query getHealth {
    healths {
      data {
        attributes {
          nameofplace
          address
          contactnumber
          picture {
            data {
              attributes {
                url
              }
            }
          }
          openhours
        }
      }
    }
  }
`;
export const queryGetWellness = gql`
  query getWellness {
    wellnesses {
      data {
        attributes {
          nameofplace
          desc
          address
          number
          image {
            data {
              attributes {
                url
              }
            }
          }
          openhours
        }
      }
    }
  }
`;
export const queryGetPetFriendly = gql`
  query getPetFriendly {
    petfriendlies {
      data {
        attributes {
          nameofplace
          desc
          address
          contactnumber
          picture {
            data {
              attributes {
                url
              }
            }
          }
          openhours
        }
      }
    }
  }
`;

export const queryGetProducts = gql`
  query getProducts($species: String!) {
    products(filters: { species: { name: { containsi: $species } } }) {
      data {
        attributes {
          name
          price
          pictures {
            data {
              attributes {
                url
              }
            }
          }
          link
          species {
            data {
              attributes {
                name
              }
            }
          }
          product_category {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const queryGetSpeciesWithProducts = gql`
  query {
    allSpecies(filters: { products: { name: { notNull: true } } }) {
      data {
        attributes {
          name
        }
      }
    }
  }
`;
