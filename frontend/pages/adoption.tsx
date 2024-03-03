import { adoptionCard, adoptionGrid, adoptionWrapper } from "@/styles/adoption";
import { Button, Card } from "@mui/material";
export default function Adoption() {
  const header = <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />;
  const footer = <Button label="Adopt" />;
  return (
    <section className="page-wrapper" css={adoptionWrapper}>
      <span>Adoption</span>
      <div css={adoptionGrid}>
        <Card css={adoptionCard} title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header}>
          <p className="m-0 main-para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid, ratione porro nostrum et
            accusantium est provident! Nostrum rerum dolor ducimus autem, repellat illum facere animi explicabo
            exercitationem sapiente libero? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid,
            ratione porro nostrum et accusantium est provident! Nostrum rerum dolor ducimus autem, repellat illum facere
            animi explicabo exercitationem sapiente libero?
          </p>
        </Card>
        <Card css={adoptionCard} title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header}>
          <p className="m-0"></p>
        </Card>
        <Card css={adoptionCard} title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header}>
          <p className="m-0"></p>
        </Card>
        <Card css={adoptionCard} title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header}>
          <p className="m-0"></p>
        </Card>
      </div>
    </section>
  );
}
