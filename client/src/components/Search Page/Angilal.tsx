import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { styled } from "@mui/material/styles";

const Aris = [
  { name: "Арьсны үрэвсэл" },
  { name: "Батганы эсрэг" },
  { name: "Мөөгөнцрийн эсрэг" },
  { name: "Түлэнхийн тос" },
  { name: "Халдваргүйжүүлэх" },
  { name: "Харшил" },
  { name: "Хатиг" },
  { name: "Хомхой долоох" },
  { name: "Шарх, сорви" },
];

const boor = [
  {
    name: "Бөөр, шээсний замын бэлдмэл",
  },
  { name: "Түрүү булчирхайн өвчний үед хэрэглэх бэлдмэлүүд" },
  { name: "Эмэгтэйчүүд" },
];

const gormon = [
  { name: "Бамбай булчирхайн эм" },
  { name: "Даавар агуулсан үрэвслийн эсрэг эм" },
  { name: "Жирэмслэлтээс хамгаалах" },
];

const daralt = [{ name: "Даралтны эм" }, { name: "Шээс хөөх эм" }];

const zurh = [
  { name: "Зүрх судас, даралт" },
  { name: "Зүрх судас бусад" },
  { name: "Зүрхний хэм алдалт" },
  { name: "Судас тэлэх" },
  { name: "Судас хамгаалах" },
  { name: "Тайвшруулах" },
  { name: "Хөлийн судасны бүдүүрэлд" },
  { name: "Цусанд өөх тос бууруулах" },
];

const kalits = [
  { name: "Кальцийн бэлдмэл бусад" },
  { name: "Насанд хүрэгчид" },
  { name: "Хүүхэд" },
];
const nud = [
  { name: "Нүдний даралт ихсэх" },
  { name: "Нүдний дусаалга" },
  { name: "Нүдний нэмэлт витамин" },
  { name: "Нүдний тос" },
  { name: "Хиймэл нулимс" },
];
const owcinNamdaah = [
  { name: "Биеийн өвдөлт" },
  { name: "Нурууны өвдөлт" },
  { name: "Өвдөлт намдаах лаа" },
  { name: "Өвдөлт намдаах наалт" },
  { name: "Өвдөлт намдаах тос" },
  { name: "Өвдөлт намдаах тос" },
  { name: "Өвдөлт намдаах тос" },
  { name: "Өвдөлт намдаах тос" },
  { name: "Өвдөлт намдаах тос" },
];

const tarhi = [
  { name: "Тайвшруулах" },
  { name: "Тархины үйл ажиллагааг дэмжих" },
  { name: "Өвдөлт намдаах" },
  { name: "Хаван хөөх бэлдмэл" },
];

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "12rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export default function Angilal() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  return (
    <div>
      <h1 className=" py-5 border bg-white px-5 text-xl font-bold">Ангилал</h1>
      <Accordion className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="bg-white "
        >
          <Typography className="">Эм</Typography>
        </AccordionSummary>
        {/* Арьсны эмгэг */}
        <AccordionDetails>
          <Accordion className="shadow-none ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-white shadow-none"
            >
              <Typography>Арьсны эмгэг</Typography>
            </AccordionSummary>
            {Aris.map((aris) => {
              return (
                <>
                  <AccordionDetails>
                    <Accordion className="shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="bg-white"
                      >
                        <Typography>{aris.name}</Typography>
                      </AccordionSummary>
                    </Accordion>
                  </AccordionDetails>
                </>
              );
            })}
            ;
          </Accordion>
        </AccordionDetails>
        {/* Бөөр, шээсний замын эмгэг */}
        <AccordionDetails>
          <Accordion className="shadow-none ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-white shadow-none"
            >
              <Typography>Бөөр, шээсний замын эмгэг</Typography>
            </AccordionSummary>
            {boor.map((boor) => {
              return (
                <>
                  <AccordionDetails>
                    <Accordion className="shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="bg-white"
                      >
                        <Typography>{boor.name}</Typography>
                      </AccordionSummary>
                    </Accordion>
                  </AccordionDetails>
                </>
              );
            })}
            ;
          </Accordion>
        </AccordionDetails>
        {/* Гормон, даава */}
        <AccordionDetails>
          <Accordion className="shadow-none ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-white shadow-none"
            >
              <Typography>Гормон, даавар</Typography>
            </AccordionSummary>
            {gormon.map((daawar) => {
              return (
                <>
                  <AccordionDetails>
                    <Accordion className="shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="bg-white"
                      >
                        <Typography>{daawar.name}</Typography>
                      </AccordionSummary>
                    </Accordion>
                  </AccordionDetails>
                </>
              );
            })}
          </Accordion>
        </AccordionDetails>
        {/* Даралт бууруулах */}
        <AccordionDetails>
          <Accordion className="shadow-none ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-white shadow-none"
            >
              <Typography>Даралт бууруулах</Typography>
            </AccordionSummary>
            {daralt.map((daralt) => {
              return (
                <>
                  <AccordionDetails>
                    <Accordion className="shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="bg-white"
                      >
                        <Typography>{daralt.name}</Typography>
                      </AccordionSummary>
                    </Accordion>
                  </AccordionDetails>
                </>
              );
            })}
          </Accordion>
        </AccordionDetails>
        {/* Кальцийн бэлдмэл */}
        <AccordionDetails>
          <Accordion className="shadow-none ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-white shadow-none"
            >
              <Typography>Кальцийн бэлдмэл</Typography>
            </AccordionSummary>
            {kalits.map((beldmel) => {
              return (
                <>
                  <AccordionDetails>
                    <Accordion className="shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="bg-white"
                      >
                        <Typography>{beldmel.name}</Typography>
                      </AccordionSummary>
                    </Accordion>
                  </AccordionDetails>
                </>
              );
            })}
          </Accordion>
        </AccordionDetails>
        {/* Нүд */}
        <AccordionDetails>
          <Accordion className="shadow-none ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-white shadow-none"
            >
              <Typography>Нүд</Typography>
            </AccordionSummary>
            {nud.map((nud) => {
              return (
                <>
                  <AccordionDetails>
                    <Accordion className="shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="bg-white"
                      >
                        <Typography>{nud.name}</Typography>
                      </AccordionSummary>
                    </Accordion>
                  </AccordionDetails>
                </>
              );
            })}
          </Accordion>
        </AccordionDetails>
        {/* Өвдөлт намдаах, халуун бууруулах */}
        <AccordionDetails>
          <Accordion className="shadow-none ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-white shadow-none"
            >
              <Typography>Өвдөлт намдаах, халуун бууруулах</Typography>
            </AccordionSummary>
            {owcinNamdaah.map((owcin) => {
              return (
                <>
                  <AccordionDetails>
                    <Accordion className="shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="bg-white"
                      >
                        <Typography>{owcin.name}</Typography>
                      </AccordionSummary>
                    </Accordion>
                  </AccordionDetails>
                </>
              );
            })}
          </Accordion>
        </AccordionDetails>
        {/* Тамхинаас гаргах эм */}
        <AccordionDetails>
          <Accordion className="shadow-none ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-white shadow-none"
            >
              <Typography>Тамхинаас гаргах эм</Typography>
            </AccordionSummary>
          </Accordion>
        </AccordionDetails>
        {/* Тархи мэдрэл */}
        <AccordionDetails>
          <Accordion className="shadow-none ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-white shadow-none"
            >
              <Typography>Тархи мэдрэл</Typography>
            </AccordionSummary>
            {tarhi.map((medrel) => {
              return (
                <>
                  <AccordionDetails>
                    <Accordion className="shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="bg-white"
                      >
                        <Typography>{medrel.name}</Typography>
                      </AccordionSummary>
                    </Accordion>
                  </AccordionDetails>
                </>
              );
            })}
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
