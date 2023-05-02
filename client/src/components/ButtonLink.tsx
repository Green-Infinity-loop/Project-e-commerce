import { Link } from "react-router-dom";

export default function ButtonLink() {
  return (
    <>
      <button
        type="button"
        className="border w-11/12 text-white bg-[#17887a]  font-medium rounded-xl text-sm px-5 py-3 text-center mt-5 "
      >
        <a href="/kk"> sags</a>
      </button>
      <button
        type="button"
        className="border w-11/12 text-white bg-[#17887a] font-medium rounded-xl text-sm px-5 py-3 text-center mt-5"
      >
        <a href="/ll"> sagsbjh</a>
      </button>

      <button
        type="button"
        className="border w-11/12 text-gray-900 bg-[#17887a] text-white font-medium rounded-xl text-sm px-5 py-3 text-center mt-5"
      >
        <a href="/hh"> sags</a>
      </button>
    </>
  );
}
