import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";

export const useModal = () => {
  const { setOpen } = useContext(ModalContext);
  const showModal = () => {
    setOpen(true);
  };
  return showModal;
};
