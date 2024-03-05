import { listingForm, submitBtn } from "@/styles/listing";
import axios from "axios";
import { FilePond } from "react-filepond";
import { useRef, useState } from "react";
import { nanoid } from "nanoid/non-secure";
import { useMutation } from "@apollo/client";
import { DataMutationUploadNewFile, VariablesMutationUploadNewFile } from "@/gql/mutation-types";
import { mutationUploadFile } from "@/gql/mutations";

export default function TakeAction() {
  const [details, setDetails] = useState({
    name: "",
    addressani: "",
    picture: null,
    phonenumber: 0,
    email: "",
    desc: ""
  });
  const [uploadImg] = useMutation<DataMutationUploadNewFile, VariablesMutationUploadNewFile>(mutationUploadFile);
  const imgRef = useRef<File | null>(null);
  const filePondRef = useRef<FilePond>(null);
  const handleChange = (e: any) => {
    const temp = e.target || e.originalEvent?.target;
    switch (temp.name) {
      case "name":
        setDetails((prev) => ({ ...prev, name: temp.value }));
        break;
      case "email":
        setDetails((prev) => ({ ...prev, email: temp.value }));
        break;
      case "addressani":
        setDetails((prev) => ({ ...prev, addressani: temp.value }));
        break;
      case "desc":
        setDetails((prev) => ({ ...prev, desc: temp.value }));
        break;
      case "picture":
        setDetails((prev) => ({ ...prev, picture: temp.value }));
        break;
      case "phonenumber":
        setDetails((prev) => ({ ...prev, phonenumber: temp.value }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!imgRef.current) {
      alert("no img found");
      return;
    }
    uploadImg({ variables: { file: imgRef.current } }).then((res) => {
      axios
        .post("/api/takeAction", { ...details, img: res?.data?.upload?.data?.attributes?.url ?? "" })
        .then((res) => console.log(res));
    });
    console.log("Form submitted:");
    e.target.reset();
    imgRef.current = null;
    filePondRef.current?.removeFiles();
    alert("Success");
  };

  return (
    <section className="page-wrapper">
      <span> TAKE ACTION </span>
      <form onSubmit={handleSubmit} css={listingForm}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="addressani" onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="desc" onChange={handleChange} />
        </label>
        <FilePond
          allowMultiple={false}
          css={{ width: "100%", maxWidth: "550px", marginTop: "10px", boxShadow: "0 0 2rem 0 rgba(0,0,0,0.25)" }}
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
        <label>
          Phone Number:
          <input type="tel" name="phonenumber" onChange={handleChange} />
        </label>
        <button type="submit" css={submitBtn}>
          Submit
        </button>
      </form>
    </section>
  );
}
