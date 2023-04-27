import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { createContext, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,

  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ModalContext.Provider value={{ setOpen }}>
      {children}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between justify-center text-center">
            <div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <img
                  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
                  alt=""
                />
              </div>
              <div className="h-12 text-center">Tolgoinii em</div>
            </div>

            <div className="">
              <div className="w-80 h-25 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-1 ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias dignissimos numquam iure incidunt
                </p>
              </div>
              <div className="h-5 ">3</div>
              <div className="w-80 h-40 border-solid max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-1 ">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore natus fuga in error nisi velit, officia maiores commodi
                  corporis, temporibus, saepe minima earum sequi pariatur vel
                  quam quo voluptatum consectetur.
                </p>
              </div>
              <div className="flex justify-center">
                <button className="rounded-md m-2 w-20 h-12 text-center border-2 border-indigo-600 hover:bg-[#17887A] hover:text-white">
                  Open
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </ModalContext.Provider>
  );
};
