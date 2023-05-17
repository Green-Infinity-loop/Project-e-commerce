import Layout from "@/components/Layout";
import Link from "next/link";

export default function locations() {
  return (
    <Layout>
      <Link
        className="bg-blue-900 rounded-md py-1 px-2 text-white"
        href={"/location/new"}
      >
        Add new Products
      </Link>
    </Layout>
  );
}
