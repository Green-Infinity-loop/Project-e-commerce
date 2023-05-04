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
    <div className="container  mx-auto py-10">
      <h1 className="text-3xl font-semibold text-center my-4 ">
        Hunii dotood gadaad erhten shuude
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
        })}
      </div>
    </div>
  );
}
