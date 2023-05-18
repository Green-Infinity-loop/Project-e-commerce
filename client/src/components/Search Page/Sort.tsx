import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";



export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "white", color:'white' }}>
        <FormControl className=" text-white">
          <InputLabel className="text-white text-[12px]" id="demo-simple-select-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            className={'p-0 h-[36px] w-[123px] bg-black ml-2 rounded-none'}
          >
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={24}>24</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
    </>
  );
}



const datas = [
  {
    name: "Ханиад, томуу, харшил",
  },
  {
    name: "Ходоод гэдэс",
  },
  {
    name: "Зүрх судас",
  },
  {
    name: "Үе мөч, булчин",
  },
  {
    name: "Тархи мэдрэл",
  },
  {
    name: "Өвдөлт намдаах, халуун бууруулах",
  },
  {
    name: "Арьсны эмгэг",
  },
  {
    name: "Хоолой өвдөх",
  },
  {
    name: "Бөөр, шээсний замын эмгэг",
  },
  {
    name: "Даралт бууруулах",
  },
  {
    name: "Эмэгтэйчүүдийн эрүүл мэнд",
  },
  {
    name: "Хавдрын эсрэг, дархлаа зохицуулах бэлдмэл",
  },
  {
    name: "Цус, цус төлжүүлэх эрхтэн",
  },
  {
    name: "Чих, хамар",
  },
  {
    name: "Кальцийн бэлдмэл",
  },
  {
    name: "Нүд",
  },
  {
    name: "Эрэгтэйчүүдийн эрүүл мэнд",
  },
  {
    name: "Шимэгчийн эсрэг",
  },
  {
    name: "Гормон, даавар",
  },
  {
    name: "Тарилгын шингэн",
  },
  {
    name: "Чихрийн шижин",
  },
  {
    name: "Эрхтэн шилжүүлэн суулгасан үед хэрэглэх бэлдмэл",
  },
  {
    name: "Тамхинаас гаргах эм",
  },
  {
    name: "Тодосгогч бодис",
  },
];
{/* <Box>
        {datas.map((sort) => {
          return (
            <>
              <div className="relative h-56 overflow-hidden rounded-lg md:h-12">
                <div className=" duration-700 ease-in-out" data-carousel-item>
                  <button className=" duration-700 ease-in-out border p-3 my-3 rounded-lg mx-1 ">
                    {sort.name}
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </Box> */}