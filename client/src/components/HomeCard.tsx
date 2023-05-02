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
      <div className="grid grid-cols-9 gap-4  ">
        {datas.map((data, index) => {
          return (
            <>
              <div className="group relative overflow-hidden duration-500 flex flex-wrap border rounded-full p-4 m-auto">
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
