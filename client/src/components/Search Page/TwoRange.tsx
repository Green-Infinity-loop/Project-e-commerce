import * as React from "react";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

const PrettoSlider = styled(Slider)({
  color: "#0989FF",
  height: 12,
  "& .MuiSlider-thumb": {
    height: 20,
    width: 4,
    borderRadius:0,
    boxShadow: "none",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "none",
    },
    "&.MuiSlider-rail":{
      width:0,
    }
  },
  "& .MuiInputBase-root": {
    boxShadow: "none", // Remove box shadow from the input
  },

});

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: "80%", height: "50%" }}>
      <PrettoSlider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        step={10}
        marks
        min={0}
        max={5000}
        className="mx-6"
      />
      <div className="grid grid-cols-2 w-[360px]">
        <span className="text-[14px]">${" "}{value}</span>
        <button className="bg-[#F5F5F5] hover:bg-[#010F1C] px-[21px] py-[2px] font-[400] text-[14px] hover:text-white m-auto">
                Filter
        </button>
      </div>
    </Box>
  );
}
