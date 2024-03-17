import { queryGetHealth } from "@/gql/queries";
import { AttributesInDataContainer, Health, QueryGetHealth } from "@/gql/query-types";
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

export default function Health() {
  const { data } = useQuery<QueryGetHealth>(queryGetHealth);
  const [searchQuery, setSearchQuery] = useState("");
  const pets = data?.healths?.data ?? [];

  const filteredPets = pets.filter((health: Health) => {
    return health.attributes.address.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const petMapper = ({ attributes = {} as never }: Health = {} as never, index: number) => {
    const { nameofplace, address, contactnumber, picture, openhours } = attributes;
    return (
      <div key={`${address}-${contactnumber}-${index}`} css={adoptionCard}>
        <div css={bgImgContainer}>
          <Image src="/images/paws.png" alt="logo" fill sizes="100%" />
        </div>
        <div css={cardImgContainer}>
          <Image src={dataAttributeHelper(picture, "url")} alt={nameofplace} sizes="100%" fill />
        </div>
        <div css={adoptionCardText}>
          <div className="card-info-pair">
            <span className="card-label"> Name </span> <span>{nameofplace}</span>
          </div>
          <a
            target="_blank"
            href={`https://maps.google.com?q=${encodeURIComponent(address)}`}
            className="card-info-pair"
          >
            <span className="card-label"> address: </span>
            <span>{address}</span>
          </a>
          <div className="card-info-pair">
            <span className="card-label"> Open Hours: </span>
            <span>{openhours}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label"> Contact Number: </span>
            <span>{contactnumber}</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="page-wrapper" css={adoptionWrapper}>
      <h1 className="adoption-header"> Health - Pet Clinics and Hospitals</h1>
      <input type="text" placeholder="Search by location" value={searchQuery} onChange={handleSearchChange} />
      <div css={adoptionGrid}>{filteredPets?.length ?? 0 > 0 ? filteredPets.map(petMapper) : "Loading..."}</div>
      {/* <div css={adoptionGrid}>{pets?.length ?? 0 > 0 ? pets.map(petMapper) : "Loading..."}</div> */}
    </section>
  );
}
