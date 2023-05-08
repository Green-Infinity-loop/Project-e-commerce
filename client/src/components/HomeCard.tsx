const datas = [
  {
    name: "Шүд",
    imgUrl: "icon/teeth.png",
    title:
      "Шүдний завсраар ор­сон хоол хүнсний үлдэг­дэл, амны хөндийг сайтар цэвэрлэ. ",
  },
  {
    imgUrl: "icon/nose.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/brain.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/eye.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/heart.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
];

export default function HomeCard() {
  return (
    <>
      <div className="container  mx-auto py-10">
        <h1 className="text-5xl font-semibold text-center my-4 text-white ">
          Hunii dotood gadaad erhten shuude
        </h1>
        <div className="border-b-4 border-[#d946ef] my-8"></div>
        <div className="grid grid-cols-9 gap-4  ">
          {/* {datas.map((data, index) => {
    <div className="container h-[50vh] mx-auto py-10">
      <h1 className="text-5xl font-semibold text-center my-4 text-white ">
        Shop by Concern
      </h1>
      <div className="border-b-4 border-[#d946ef] my-8"></div>
      <div className="grid grid-cols-9 gap-4  ">
        {datas.map((data, index) => {
          return (
          <>
            <div className="xl:w-36 xl:h-36 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-16 sm:h-16 cl:w-12 cl:h-12   group relative overflow-hidden duration-500 flex flex-wrap border rounded-full p-3 m-auto">
              <img
                src={data.imgUrl}
                alt=""
                className="m-auto group-hover:scale-110 transition duration-300 ease-in-out  w-12"
              />
            </div>
          </>
          );
           })}  */}
        </div>
      </div>

      <div
        id="controls-carousel"
        className="relative w-full"
        data-carousel="static"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {datas.map((data) => {
            return (
              <>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src={data.imgUrl}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2   m-auto group-hover:scale-110 transition duration-300 ease-in-out  w-12"
                    alt="ed erhten"
                  />
                </div>
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 4"
                    data-carousel-slide-to="3"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 5"
                    data-carousel-slide-to="4"
                  ></button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
