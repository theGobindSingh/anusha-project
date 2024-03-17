import { queryGetSpeciesWithProducts } from "@/gql/queries";
import { QueryGetSpeciesWithProducts } from "@/gql/query-types";
import { adoptionCard } from "@/styles/adoption";
import { homeWrapper, linkDiv } from "@/styles/home";
import { useQuery } from "@apollo/client";
import Link from "next/link";

export default function Shop() {
  const { data } = useQuery<QueryGetSpeciesWithProducts>(queryGetSpeciesWithProducts);
  const mapper = (spe: QueryGetSpeciesWithProducts["allSpecies"]["data"][0], index: number) => {
    return (
      <Link key={index} href={`/shop/${spe.attributes.name}`}>
        {spe.attributes.name}
      </Link>
    );
  };
  return (
    <section className="page-wrapper" css={homeWrapper}>
      <span className="main-heading">Shop</span>
      {data?.allSpecies.data.map(mapper)}
    </section>
  );
}
