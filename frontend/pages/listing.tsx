import { listingForm, listingWrapper, radioContainer } from "@/styles/listing";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton, RadioButtonClickEvent } from "primereact/radiobutton";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { mutationSetNewPet } from "@/gql/queries";

const RadioWrapper = ({ values, name }: { values: string[]; name: string }) => {
  const mapper = (value: string, index: number) => {
    return (
      <div className="flex align-items-center" key={name + value + index}>
        <input id={name + value + index} name={name} value={value} defaultChecked={index === 0} type="radio" />
        <label htmlFor={name + value + index} className="ml-2">
          {value}
        </label>
      </div>
    );
  };
  return <div css={radioContainer}>{values.map(mapper)}</div>;
};

export default function Listing() {
  const [createPet, { data, loading, error }] = useMutation(mutationSetNewPet);
  const formRef = useRef<HTMLFormElement>(null);
  const [petDetails, setPetDetails] = useState({
    age: 0,
    breed: "",
    picture: null,
    ownerName: "",
    ownerNumber: 0,
    ownerEmail: "",
    ownerLocation: ""
  });
  const handleChangeold = (e: any) => {
    const temp = e.target || e.originalEvent?.target;
    switch (temp.name) {
      case "name":
        setPetDetails((prev) => ({ ...prev, ownerName: temp.value }));
        break;
      case "email":
        setPetDetails((prev) => ({ ...prev, ownerEmail: temp.value }));
        break;
      case "location":
        setPetDetails((prev) => ({ ...prev, ownerLocation: temp.value }));
        break;
      case "breed":
        setPetDetails((prev) => ({ ...prev, breed: temp.value }));
        break;
      case "age":
        setPetDetails((prev) => ({ ...prev, age: temp.value }));
        break;
      case "number":
        setPetDetails((prev) => ({ ...prev, ownerNumber: temp.value }));
        break;
      default:
        break;
    }
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    const inputs = Array.from(e.target) as HTMLInputElement[];
    const output = {
      inputs: inputs
        .filter((target) => (target?.type === "radio" ? target.checked : target.value))
        .map(({ value, id, name, type }) => ({
          [`${name || id}`]: type === "number" ? Number(value.replace(/\,/gm, "")) : value
        }))
    };
    createPet({
      variables: {
        parent: output.inputs[4].name,
        parentContact: output.inputs[5].number,
        species: output.inputs[0].species === "cat" ? 1 : 2,
        petage: output.inputs[1].age,
        email: output.inputs[6].email,
        location: output.inputs[7].location,
        breed: output.inputs[3].breed,
        gender: output.inputs[2].gender,
        publishedAt: new Date().toISOString()
      }
    });
  };
  return (
    <section className="page-wrapper" css={listingWrapper}>
      <span>List For Adoption</span>
      <form action="submit" onSubmit={submitHandler} css={listingForm} ref={formRef}>
        <h2>Pet Details</h2>

        <div>
          <RadioWrapper name="species" values={["cat", "dog"]} />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <InputText type="number" id="age" name="age" />
        </div>

        <div>
          <RadioWrapper name="gender" values={["male", "female"]} />
        </div>

        <div>
          <label htmlFor="breed">Breed:</label>
          <InputText id="breed" name="breed" required />
        </div>

        <div>
          <label htmlFor="picture">Picture:</label>
          <FileUpload
            multiple
            accept="image/*"
            maxFileSize={1000000}
            id="picture"
            name="picture"
            customUpload
            uploadHandler={(e) => console.log(e)}
          />
        </div>

        <h2>Owner Details</h2>

        <div>
          <label htmlFor="name">Name:</label>
          <InputText id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="number">Number:</label>
          <InputText type="number" id="number" name="number" required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <InputText id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <InputText id="location" name="location" required />
        </div>

        <Button className="my-4" type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
}
