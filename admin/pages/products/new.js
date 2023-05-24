import Layout from "@/components/Layout";
import { useCrud } from "@/hooks/useCrud";
import { useState } from "react";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState('');
  
  const { items: locations } = useCrud("locations");
  const { createItem } = useCrud("products");
  console.log("location is", location);
  return (
    <Layout>
      <h1> New product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createItem({ image, name, price, location });
        }}
      >
        <label> Product name</label>
        <input
          value={name}
          type="text"
          placeholder="product name"
          onChange={(e) => setName(e.target.value)}
        />
        <label> Image</label>
        <input
          value={image}
          type="text"
          placeholder="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <label> Price</label>
        <input
          value={price}
          type="text"
          placeholder="price"
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
        <input
        value={2000} />
        <button>Add</button>
        
        <button className="btn-primary" type="submit">
          Ilgeeh
        </button>
      </form>
    </Layout>
  );
}
