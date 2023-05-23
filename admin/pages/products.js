import Layout from "@/components/Layout";
import { useCrud } from "@/hooks/useCrud";
import Link from "next/link";

export default function Products() {
  const { items: products } = useCrud("products");
  console.log(products);
  return (
    <Layout>
      <Link
        className="bg-blue-900 rounded-md py-1 px-2 text-white"
        href={"/products/new"}
      >
        Add new Products
      </Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>product Name</td>
            <td>product ID</td>
            <td>Image</td>
            <td>Price</td>
            <td>location</td>
          </tr>
        </thead>

        <tbody>
          {products.map((product, idx) => (
            <tr key={idx}>
              <td>{product.name}</td>
              <td>{product._id}</td>
              <td>{product.image}</td>
              <td>{product.price}</td>
              <td>{product.location.name}</td>
              <td></td>
              <div className="flex">
                <Link href={"/products/" + product._id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  edit
                </Link>
                <Link href={"/products/" + product._id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                  delete
                </Link>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
