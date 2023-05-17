import Layout from "@/components/Layout";
import { useCrud } from "@/hooks/useCrud";
import { useState } from "react";

export default function NewProduct({ locations }) {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [working_hours_start, setWorking_hours_start] = useState("");
  const [working_hours_end, setWorking_hours_end] = useState("");
  const { createItem } = useCrud("locations");
  return (
    <Layout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createItem({
            image,
            photo,
            address,
            working_hours_start,
            working_hours_end,
            location,
          });
        }}
      >
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={photo}
          type="text"
          placeholder="photo"
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          value={address}
          type="text"
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          value={working_hours_start}
          type="text"
          placeholder="working_hours_start"
          onChange={(e) => setWorking_hours_start(e.target.value)}
        />
        <input
          value={working_hours_end}
          type="text"
          placeholder="working_hours_end"
          onChange={(e) => setWorking_hours_end(e.target.value)}
        />
        <input
          value={location}
          type="text"
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>
      <button type="submit"></button>
    </Layout>
  );
}
location;
