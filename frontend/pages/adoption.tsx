import { queryGetAllPets } from "@/gql/queries";
import {
  AttributesInDataContainer,
  Pet,
  QueryGetAllPets
} from "@/gql/query-types";
import { adoptionCard, adoptionGrid, adoptionWrapper } from "@/styles/adoption";
import { useQuery } from "@apollo/client";
import Image from "next/image";

const dataAttributeHelper = (
  input: AttributesInDataContainer<any>,
  key: string
) => input.data.attributes?.[key] as string;

function Adoption() {
  const { data } = useQuery<QueryGetAllPets>(queryGetAllPets);
  const pets = data?.pets?.data ?? [];
  const petMapper = (
    { attributes = {} as never }: Pet = {} as never,
    index: number
  ) => {
    const {
      breed,
      email,
      gender,
      location,
      parent,
      parentContact,
      petAge,
      picture,
      species
    } = attributes;
    return (
      <div key={`${email}-${parentContact}-${index}`}>
        {/* refactor and style */}
        <span>{breed}</span>
        <span>{gender}</span>
        <span>{location}</span>
        <span>{parent}</span>
        <span>{parentContact}</span>
        <span>{petAge}</span>
        <span>{dataAttributeHelper(species, "name")}</span>
        <span>
          <Image
            src={dataAttributeHelper(picture, "url")}
            alt={breed}
            width={100}
            height={100}
          />
        </span>
      </div>
    );
  };
  return (
    <section className="page-wrapper" css={adoptionWrapper}>
      <span>Adoption</span>
      <div css={adoptionGrid}>
        {pets?.length ?? 0 > 0 ? pets.map(petMapper) : "Loading..."}
      </div>
    </section>
  );
}

export default Adoption;
