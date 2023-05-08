import Image from "next/image";

const products = [
  {
    name: "ТИОЦЕТАМ Т/УУСМ 5МЛ N10",
    image: "https://cdn3.shoppy.mn/spree/images/1752912/large/00-00001596.jpg",
    price: "24,638 ₮",
    info: "Сэтгэц сэргээх, ноотроп бэлдмэл",
    Хэлбэр: "Тарилгын уусмал",
    "Хайрцаг дахь тоо": "10",
    "Жортой эсэх": "Жортой",
    "Тун, хэмжээ": "25мг/мл+100мг/мл-5мл",
    "Олон улсын нэршил": " Тиазотын хүчил + Пирацетам",
    "Гарал үүсэл": "Украин Улс",
  },
  {
    name: "ТИОЦЕТАМ Т/УУСМ 5МЛ N10",
    image: "https://cdn3.shoppy.mn/spree/images/1637414/large/00-00005120.jpg",
    price: "24,638 ₮",
    info: "Сэтгэц сэргээх, ноотроп бэлдмэл",
    Хэлбэр: "Тарилгын уусмал",
    "Хайрцаг дахь тоо": "10",
    "Жортой эсэх": "Жортой",
    "Тун, хэмжээ": "25мг/мл+100мг/мл-5мл",
    "Олон улсын нэршил": " Тиазотын хүчил + Пирацетам",
    "Гарал үүсэл": "Украин Улс",
  },
  {
    name: "ТИОЦЕТАМ Т/УУСМ 5МЛ N10",
    image: "https://cdn3.shoppy.mn/spree/images/1682820/large/00-00002694.jpg",
    price: "24,638 ₮",
    info: "Сэтгэц сэргээх, ноотроп бэлдмэл",
    Хэлбэр: "Тарилгын уусмал",
    "Хайрцаг дахь тоо": "10",
    "Жортой эсэх": "Жортой",
    "Тун, хэмжээ": "25мг/мл+100мг/мл-5мл",
    "Олон улсын нэршил": " Тиазотын хүчил + Пирацетам",
    "Гарал үүсэл": "Украин Улс",
  },
  {
    name: "ТИОЦЕТАМ Т/УУСМ 5МЛ N10",
    image: "https://cdn3.shoppy.mn/spree/images/1693934/large/00-00005672.jpg",
    price: "24,638 ₮",
    info: "Сэтгэц сэргээх, ноотроп бэлдмэл",
    Хэлбэр: "Тарилгын уусмал",
    "Хайрцаг дахь тоо": "10",
    "Жортой эсэх": "Жортой",
    "Тун, хэмжээ": "25мг/мл+100мг/мл-5мл",
    "Олон улсын нэршил": " Тиазотын хүчил + Пирацетам",
    "Гарал үүсэл": "Украин Улс",
  },
  {
    name: "ТИОЦЕТАМ Т/УУСМ 5МЛ N10",
    image: "https://cdn3.shoppy.mn/spree/images/1664741/large/00-00008419.jpg",
    price: "24,638 ₮",
    info: "Сэтгэц сэргээх, ноотроп бэлдмэл",
    Хэлбэр: "Тарилгын уусмал",
    "Хайрцаг дахь тоо": "10",
    "Жортой эсэх": "Жортой",
    "Тун, хэмжээ": "25мг/мл+100мг/мл-5мл",
    "Олон улсын нэршил": " Тиазотын хүчил + Пирацетам",
    "Гарал үүсэл": "Украин Улс",
  },
  {
    name: "ТИОЦЕТАМ Т/УУСМ 5МЛ N10",
    image: "https://cdn3.shoppy.mn/spree/images/1752912/large/00-00001596.jpg",
    price: "24,638 ₮",
    info: "Сэтгэц сэргээх, ноотроп бэлдмэл",
    Хэлбэр: "Тарилгын уусмал",
    "Хайрцаг дахь тоо": "10",
    "Жортой эсэх": "Жортой",
    "Тун, хэмжээ": "25мг/мл+100мг/мл-5мл",
    "Олон улсын нэршил": " Тиазотын хүчил + Пирацетам",
    "Гарал үүсэл": "Украин Улс",
  },
];

export default function SearchPageCard() {
  return (
    <div className="container">
      {products.map((product) => {
        return (
          <div key={product.name} className="text-black w-100% border-4 ">
            <div className="grid grid-cols-3">
              <div className="bg-[#c7d2fe] mx-auto w-80 center">
                <Image
                  alt=""
                  className="object-cover"
                  src={product.image}
                  width={520}
                  height={400}
                />
              </div>
              <div className="m-7 space-y-4">
                <div>Гарал үүсэл : {product["Гарал үүсэл"]}</div>
                <div>Хэлбэр : {product["Хэлбэр"]}</div>
                <div>Хайрцаг дахь тоо : {product["Хайрцаг дахь тоо"]}</div>
                <div>Жортой эсэх : {product["Жортой эсэх"]}</div>
                <div>Тун, хэмжээ : {product["Тун, хэмжээ"]}</div>
                <div>Олон улсын нэршил : {product["Олон улсын нэршил"]}</div>
              </div>
              <div className="">
                <div className="m-7">Үнэ : {product.price}</div>
                <div className="m-7">
                  Бүтээгдэхүүний мэдээлэл : {product.info}
                </div>
                <button className="border-2 rounded-lg m-7 border-pink-200 hover:bg-[#fb7185]">
                  <div className="m-4">Сагсанд нэмэх</div>
                </button>
                <button className="border-2 border-pink-200 rounded-lg hover:bg-[#fb7185]">
                  <div className="m-4">Байршил</div>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
