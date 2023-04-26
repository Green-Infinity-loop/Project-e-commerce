const filter = [
  { title: "Шахмал", count: 12 },
  { title: "Капсул", count: 12 },
  { title: "Тосон түрхлэг", count: 12 },
  { title: "Ампул", count: 12 },
  { title: "Сироп", count: 12 },
  { title: "Дусал", count: 12 },
  { title: "Нунтаг", count: 12 },
  { title: "Хөвмөл", count: 12 },
  { title: "Хүлхдэг шахмал", count: 12 },
  { title: "Нүдний дусаалга", count: 12 },
  { title: "Уусдаг нунтаг", count: 12 },
  { title: "Хүлхдэг шахмал", count: 12 },
];

export default function Range() {
  return (
    <>
      <div className="">
        <div>
          <input
            type="range"
            className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
            id="customRange1"
          />
          <div className="grid grid-cols-2 gap-2 ">
            <button className="border rounded p-2 w-28 mt-3  hover:bg-cyan-500 m-auto">
              Filter
            </button>
            <button className="border rounded p-2 w-28 mt-3  m-auto">
              $123-1234
            </button>
          </div>
        </div>

        {/* <div className=" mt-5">
          <h1>Хэлбэр</h1>
          <div className="  ">
            {filter.map((helber) => {
              return (
                <>
                  <div className="grid grid-cols-8 border p-3 my-4 rounded-xl">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className=" col-start-1 col-end-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <label className="text-left col-start-3 col-end-6 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  ">
                      {helber.title}
                    </label>
                    <p className="col-start-7 col-end-8 text-right">
                      {helber.count}
                    </p>
                  </div>
                </>
              );
            })}
          </div> */}
        <h1>Хайрцаг дахь шахмал</h1>
        <div className="  ">
          {filter.map((helber) => {
            return (
              <>
                <div
                  className="grid grid-cols-8 border p-3 my-4 rounded-xl "
                  aria-labelledby="dropdownDefaultButton"
                >
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className=" col-start-1 col-end-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label className="text-left col-start-3 col-end-6 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  ">
                    {helber.title}
                  </label>
                  <p className="col-start-7 col-end-8 text-right">
                    {helber.count}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
