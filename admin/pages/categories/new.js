import Layout from "@/components/Layout";
import { useCrud } from "@/hooks/useCrud";
import { useState } from "react";

export default function NewProduct() {
  const [name, setName] = useState("");
  const { createItem } = useCrud("caegories");
  return (
    <Layout>
      <h1> New product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createItem({ name });
        }}
      >
        <label> Product name</label>
        <input
          value={name}
          type="text"
          placeholder="product name"
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </Layout>
  );
}
