import { listingForm, submitBtn } from "@/styles/listing";
import { ReactFragment, useState } from "react";

export default function takeaction() {
  const [details, setDetails] = useState({
    name: "",
    addressani: "",
    picture: null,
    phonenumber: 0,
    email: "",
    desc: ""
  });

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

    console.log("Form submitted:");
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
        <label>
          Picture:
          <input type="file" name="picture" onChange={handleChange} />
        </label>
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
