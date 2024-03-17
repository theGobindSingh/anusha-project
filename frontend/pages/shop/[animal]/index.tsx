import { queryGetProducts } from "@/gql/queries";
import { AttributesInDataContainer, Health, Products, QueryGetProducts } from "@/gql/query-types";
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
import Link from "next/link";
import { useRouter } from "next/router";

const dataAttributeHelper = (input: AttributesInDataContainer<any>, key: string) =>
  input.data.attributes?.[key] as string;

export default function Product() {
  const { query } = useRouter();
  const { data, loading } = useQuery<QueryGetProducts>(queryGetProducts, {
    variables: { species: query?.animal ?? "cat" }
  });
  console.log(data);
  const pets = data?.products?.data ?? [];
  const petMapper = ({ attributes = {} as never }: Products = {} as never, index: number) => {
    const { name, price, pictures, link, species, product_category } = attributes;
    console.log(pictures);
    return (
      <div key={`${name}-${price}-${index}`} css={adoptionCard}>
        <div css={bgImgContainer}>
          <Image src="/images/paws.png" alt="logo" fill sizes="100%" />
        </div>
        <div css={cardImgContainer}>
          <Image src={dataAttributeHelper(pictures, "url")} alt={name} sizes="100%" fill priority />
        </div>
        <div css={adoptionCardText}>
          <div className="card-info-pair">
            <span className="card-label"> Name </span> <span>{name}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label"> Price </span>
            <span>{price}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label"> species </span>
            <span>{species.data[0].attributes.name}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label"> Product Category </span>
            <span>{product_category.data.attributes.name}</span>
          </div>
          <div className="card-info-pair">
            <span className="card-label"> Link to </span>
            <Link href={link}>click here to purchase</Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="page-wrapper" css={adoptionWrapper}>
      <h1 className="adoption-header">Shop</h1>
      <div css={adoptionGrid}>{loading ? "Loading..." : pets.map(petMapper)}</div>
    </section>
  );
}
