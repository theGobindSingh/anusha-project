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

const dataAttributeHelper = (input: AttributesInDataContainer<any>, key: string) =>
  input.data.attributes?.[key] as string;

function Adoption() {
  const { data } = useQuery<QueryGetAllPets>(queryGetAllPets);
  const pets = data?.pets?.data ?? [];
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
          <div className="card-info-pair">
            <span className="card-label">Location : </span>
            <span>{location}</span>
          </div>
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
      <div css={adoptionGrid}>{pets?.length ?? 0 > 0 ? pets.map(petMapper) : "Loading..."}</div>
    </section>
  );
}

export default Adoption;
