import Image from "next/image";

const data = [
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBJ07VwRAHtnpt0NRlAtPllsKV-WHe9ADENHQUznqcZEVGRmstcoLpGWTkrTXct07o40&usqp=CAU",
    title: "Монос групп",
    description:
      "Монос Групп компани Монгол Улсад анхны 10 хувийн хэвшлийн нэг болж 1990 онд үүсгэн байгуулагдаж 33 дах жилдээ үйл ажиллагаа явуулж байна.",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJqZRYZ5967aUi_YVzRT1BD-EZKHNA5tOrjTjntGaGg&s",
    title: "Хүрмэн",
    description:
      "1995 онд үүсгэн байгуулагдсан манай компани үйлчлүүлэгч та бүхэнтэйгээ өдгөө хорин зургаан жилийг ардаа үджээ. ",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39IapNqFtWBk7nd22uIn8n3PPEdcj2epjpdnRjicp&s",
    title: "АЗИ-ФАРМА",
    description:
      "“АЗИ-ФАРМА” ХХК нь Монгол улсын эмийн зах зээлд дээд зэрэглэлийн эм, эрүүл мэндийн бүтээгдэхүүний онцгой чанараар танигдсан салбартаа тэргүүлэгч компаниудын нэг билээ. ",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39IapNqFtWBk7nd22uIn8n3PPEdcj2epjpdnRjicp&s",
    title: "АЗИ-ФАРМА",
    description:
      "“АЗИ-ФАРМА” ХХК нь Монгол улсын эмийн зах зээлд дээд зэрэглэлийн эм, эрүүл мэндийн бүтээгдэхүүний онцгой чанараар танигдсан салбартаа тэргүүлэгч компаниудын нэг билээ. ",
  },
];

export default function Latest() {
  return (
    <>
      <div className="container flex justify-between my-12">
        <h1 className="text-4xl  font-bold ">Latest news & articles</h1>
        <a
          href="/"
          className="border bg-[#115061] rounded-xl py-3 px-9  text-white"
        >
          View All Blog
        </a>
      </div>
      <div className=" container grid grid-cols-4 gap-8 my-6 ">
        {data.map((datas) => {
          return (
            <>
              <div className="  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#">
                  <Image
                    width={300}
                    height={300}
                    className="rounded-t-lg h-60 flex justify-center"
                    src={datas.imgUrl}
                    alt="emiin sangiin logo"
                  />
                </a>
                <div className="p-5 h-44">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {datas.title}{" "}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {datas.description}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="my-6 mx-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#115061] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}