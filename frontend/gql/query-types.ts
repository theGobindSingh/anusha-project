interface DataContainer<T> {
  data: T;
}
interface AttributesContainer<T> {
  attributes: T;
}
export type AttributesInDataContainer<T> = DataContainer<
  AttributesContainer<T>
>;

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
