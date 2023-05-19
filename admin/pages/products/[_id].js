import Layout from "@/components/Layout";
import { useCrud } from "@/hooks/useCrud";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EditProductPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();
  const { _id } = router.query;

  const { items: locations } = useCrud("locations");
  const { items: products } = useCrud("products/" + _id);
  const { updateItem } = useCrud("products/" + _id);
  return (
    <Layout>
      edit product from here
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateItem({ image, name, price, location });
        }}
      >
        <label> Product name</label>
        <input
          value={name}
          type="text"
          placeholder={products.name}
          onChange={(e) => setName(e.target.value)}
        />

        <label> Product Name</label>
        <input
          value={image}
          type="text"
          placeholder={products.image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label> Price</label>
        <input
          value={price}
          type="text"
          placeholder={products.price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select
          type="text"
          placeholder="location Name"
          onChange={(e) => setLocation(e.target.value)}
        >
          {locations?.map((location) => (
            <option key={location._id} value={location._id}>
              {location?.name}
            </option>
          ))}
        </select>
        <button className="btn-primary" type="submit">
          Ilgeeh
        </button>
      </form>
    </Layout>
  );
}
