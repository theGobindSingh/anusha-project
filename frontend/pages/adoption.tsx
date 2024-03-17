import { queryGetAllPets } from "@/gql/queries";
import { AttributesInDataContainer, Pet, QueryGetAllPets } from "@/gql/query-types";
import {
  adoptionCard,
  adoptionCardText,
  adoptionGrid,
  adoptionWrapper,
  bgImgContainer,
  cardImgContainer
} from "@/styles/adoption";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useState } from "react";

const dataAttributeHelper = (input: AttributesInDataContainer<any>, key: string) =>
  input.data.attributes?.[key] as string;

function Adoption() {
  const { data } = useQuery<QueryGetAllPets>(queryGetAllPets);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const pets = data?.pets?.data ?? [];

  const filteredPets = pets.filter((pet: Pet) => {
    const locationMatch = pet.attributes.location.toLowerCase().includes(searchQuery.toLowerCase());
    const speciesMatch =
      selectedSpecies === "" ||
      pet.attributes.species.data.attributes.name.toLowerCase() === selectedSpecies.toLowerCase();
    const genderMatch = selectedGender === "" || pet.attributes.gender.toLowerCase() === selectedGender.toLowerCase();
    return locationMatch && speciesMatch && genderMatch;
  });

  const petMapper = ({ attributes = {} as never }: Pet = {} as never, index: number) => {
    const { breed, email, gender, location, parent, parentContact, petAge, picture, species } = attributes;
    return (
      <div key={`${email}-${parentContact}-${index}`} css={adoptionCard}>
        <div css={bgImgContainer}>
          <Image src="/images/paws.png" alt="logo" fill sizes="100%" />
        </div>
        <div css={cardImgContainer}>
          <Image src={dataAttributeHelper(picture, "url")} alt={breed} sizes="100%" fill />
        </div>
        <div css={adoptionCardText}>
          <div className="card-info-pair">
            <span className="card-label">Breed : </span> <span>{breed}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label">Gender : </span>
            <span>{gender}</span>
          </div>
          <a
            target="_blank"
            href={`https://maps.google.com?q=${encodeURIComponent(location)}`}
            className="card-info-pair"
          >
            <span className="card-label">Location : </span>
            <span>{location}</span>
          </a>
          <div className="card-info-pair">
            <span className="card-label">Parent : </span>
            <span>{parent}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label">Contact : </span>
            <span>{parentContact}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label">Pet Age : </span>
            <span>{petAge}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label">Animal Name : </span>
            <span>{dataAttributeHelper(species, "name")}</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="page-wrapper" css={adoptionWrapper}>
      <h1 className="adoption-header">Adoption- Send mail here after adoption success- pawsandclawsmitra@gmail.com</h1>

      <input
        type="text"
        placeholder="Search by location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select value={selectedSpecies} onChange={(e) => setSelectedSpecies(e.target.value)}>
        <option value="">All Species</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>
      <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
        <option value="">All Genders</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <div css={adoptionGrid}>{filteredPets?.length ?? 0 > 0 ? filteredPets.map(petMapper) : "Loading..."}</div>

      {/* <div css={adoptionGrid}>{pets?.length ?? 0 > 0 ? pets.map(petMapper) : "Loading..."}</div> */}
    </section>
  );
}

export default Adoption;
