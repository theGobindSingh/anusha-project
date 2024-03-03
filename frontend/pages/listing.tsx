import { listingForm, listingWrapper, radioContainer } from "@/styles/listing";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { mutationSetNewPet, mutationUploadFile } from "@/gql/mutations";
import {
  DataMutationUploadNewFile,
  VariablesMutationSetNewPet,
  VariablesMutationUploadNewFile,
  petEnum
} from "@/gql/mutation-types";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { nanoid } from "nanoid/non-secure";

registerPlugin(FilePondPluginImagePreview);

const RadioWrapper = ({ values, name, heading }: { values: string[]; name: string; heading: string }) => {
  const mapper = (value: string, index: number) => {
    return (
      <div key={value + index + name} className="input-container">
        <label htmlFor={value + index + name}>{value}</label>
        <input required type="radio" value={value} id={value + index + name} name={name} defaultChecked={index === 0} />
      </div>
    );
  };
  return (
    <div css={radioContainer}>
      <span>{heading}</span>
      {values.map(mapper)}
    </div>
  );
};

export default function Listing() {
  const imgRef = useRef<any>(null);
  const filePondRef = useRef<FilePond>(null);
  const [uploadImg] = useMutation<DataMutationUploadNewFile, VariablesMutationUploadNewFile>(mutationUploadFile);
  const [createPet] = useMutation<unknown, VariablesMutationSetNewPet>(mutationSetNewPet);
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const eTarget = e.target as HTMLFormElement;
    const submitBtn = eTarget.querySelector("*[type=submit]");
    submitBtn?.setAttribute("disabled", "true");
    if (imgRef.current) {
      const mainFun = async () => {
        const uploadedImg = await uploadImg({
          variables: {
            file: imgRef.current
          }
        });
        const { id: imgId } = uploadedImg?.data?.upload?.data ?? ({} as never);
        if (imgId) {
          const inputs = Array.from(eTarget) as HTMLInputElement[];
          const output = {
            inputs: inputs
              .filter((target) => (target?.type === "radio" ? target.checked : target.value))
              .map(({ value, id, name, type }) => ({
                [`${name || id}`]: type === "number" ? Number(value.replace(/\,/gm, "")) : value
              }))
          };
          createPet({
            variables: {
              parent: String(output.inputs[4].name),
              parentContact: Number(output.inputs[5].number),
              species: petEnum[output.inputs[0].species as keyof typeof petEnum],
              petage: Number(output.inputs[1].age),
              email: String(output.inputs[6].email),
              location: String(output.inputs[7].location),
              breed: String(output.inputs[3].breed),
              gender: String(output.inputs[2].gender),
              publishedAt: String(new Date().toISOString()),
              pictureId: imgId
            }
          })
            .then((res) => {
              console.log(res);
              alert("Success");
              eTarget.reset();
              imgRef.current = null;
              filePondRef.current?.removeFiles();
            })
            .catch((err) => {
              console.error(err);
              alert("Something went wrong. Please try again later.");
            });
        } else {
          alert("Image upload failed");
        }
      };
      mainFun();
    } else {
      alert("Please upload an image");
    }
    submitBtn?.removeAttribute("disabled");
  };
  return (
    <div className="page-wrapper" css={listingWrapper}>
      <span>List For Adoption</span>
      <form onSubmit={submitHandler} css={listingForm}>
        <h2>Pet Details</h2>

        <RadioWrapper name="species" values={["cat", "dog"]} heading="Species" />

        <div className="input-container">
          <input required type="number" id="age" />
          <label htmlFor="age">Age:</label>
        </div>

        <RadioWrapper name="gender" values={["male", "female"]} heading="Gender" />

        <div className="input-container">
          <input required id="breed" name="breed" />
          <label htmlFor="breed">Breed:</label>
        </div>

        <FilePond
          allowMultiple={false}
          css={{ width: "90%", maxWidth: "500px" }}
          ref={filePondRef}
          acceptedFileTypes={["image/*"]}
          maxFiles={1}
          required
          onaddfile={(err, { file, fileExtension }) => {
            if (err) {
              console.error(err);
            } else {
              const fun = async () => {
                const blob = new Blob([await file.arrayBuffer()], { type: file.type });
                const fileNew = new File([blob], `${nanoid()}.${fileExtension}`, { type: file.type });
                imgRef.current = fileNew;
              };
              fun();
            }
          }}
          onremovefile={(err) => {
            if (err) {
              console.error(err);
            } else {
              imgRef.current = null;
            }
          }}
          labelIdle={`Drag & Drop your Pet's image or <span class="filepond--label-action"> Browse </span>`}
        />

        <h2>Owner Details</h2>

        <div className="input-container">
          <input required id="name" name="name" />
          <label htmlFor="name">Name:</label>
        </div>

        <div className="input-container">
          <label htmlFor="number">Number:</label>
          <input required type="tel" id="number" name="number" />
        </div>

        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input required id="email" name="email" type="mail" />
        </div>

        <div className="input-container">
          <label htmlFor="location">Location:</label>
          <input required id="location" name="location" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
