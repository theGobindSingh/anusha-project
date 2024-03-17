interface DataContainer<T> {
  data: T;
}
interface AttributesContainer<T> {
  attributes: T;
}
export type AttributesInDataContainer<T> = DataContainer<AttributesContainer<T>>;

export type Pet = AttributesContainer<{
  breed: string;
  email: string;
  gender: string;
  location: string;
  parent: string;
  parentContact: number;
  petAge: number;
  picture: AttributesInDataContainer<{ url: string }>;
  species: AttributesInDataContainer<{ name: string }>;
}>;

export interface QueryGetAllPets {
  pets: DataContainer<Pet[]>;
}

export type Health = AttributesContainer<{
  nameofplace: string;
  address: string;
  contactnumber: number;
  picture: AttributesInDataContainer<{ url: string }>;
  openhours: string;
}>;

export interface QueryGetHealth {
  healths: DataContainer<Health[]>;
}

export type Wellness = AttributesContainer<{
  nameofplace: string;
  desc: string;
  address: string;
  number: number;
  image: AttributesInDataContainer<{ url: string }>;
  openhours: string;
}>;

export interface QueryGetWellness {
  wellnesses: DataContainer<Wellness[]>;
}

export type PetFriendly = AttributesContainer<{
  nameofplace: string;
  desc: string;
  address: string;
  contactnumber: number;
  picture: AttributesInDataContainer<{ url: string }>;
  openhours: string;
}>;

export interface QueryGetPetFriendly {
  petfriendlies: DataContainer<PetFriendly[]>;
}
export type Products = AttributesContainer<{
  name: string;
  price: number;
  pictures: AttributesInDataContainer<{ url: string }>;
  link: string;
  species: any;
  product_category: any;
}>;
export interface QueryGetProducts {
  products: DataContainer<Products[]>;
}

export interface QueryGetSpeciesWithProducts {
  allSpecies: DataContainer<
    AttributesContainer<{
      name: string;
    }>[]
  >;
}
