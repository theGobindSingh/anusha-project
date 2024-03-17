import { queryGetHealth, queryGetWellness } from "@/gql/queries";
import { AttributesInDataContainer, Health, QueryGetHealth, QueryGetWellness, Wellness } from "@/gql/query-types";
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

export default function Wellness() {
  const { data } = useQuery<QueryGetWellness>(queryGetWellness);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDesc, setDescQuery] = useState("");
  const pets = data?.wellnesses?.data ?? [];

  const filteredPets = pets.filter((wellness: Wellness) => {
    const loca = wellness.attributes.address.toLowerCase().includes(searchQuery.toLowerCase());
    const desca = wellness.attributes.desc.toLowerCase().includes(searchDesc.toLowerCase());
    return loca && desca;
  });

  const petMapper = ({ attributes = {} as never }: Wellness = {} as never, index: number) => {
    const { nameofplace, address, number, image, openhours, desc } = attributes;
    return (
      <div key={`${address}-${number}-${index}`} css={adoptionCard}>
        <div css={bgImgContainer}>
          <Image src="/images/paws.png" alt="logo" fill sizes="100%" />
        </div>
        <div css={cardImgContainer}>
          <Image src={dataAttributeHelper(image, "url")} alt={nameofplace} sizes="100%" fill />
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
            <span className="card-label"> Description </span>
            <span>{desc}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label"> Open Hours: </span>
            <span>{openhours}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label"> Contact Number: </span>
            <span>{number}</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="page-wrapper" css={adoptionWrapper}>
      <h1 className="adoption-header"> Wellness - Pet Grooming and Training</h1>
      <input
        type="text"
        placeholder="Search by location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by Desciption"
        value={searchDesc}
        onChange={(e) => setDescQuery(e.target.value)}
      />
      <div css={adoptionGrid}>{filteredPets?.length ?? 0 > 0 ? filteredPets.map(petMapper) : "Loading..."}</div>
      {/* <div css={adoptionGrid}>{pets?.length ?? 0 > 0 ? pets.map(petMapper) : "Loading..."}</div> */}
    </section>
  );
}
