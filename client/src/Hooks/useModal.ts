import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";

export const useModal = () => {
  const { setOpen }: any = useContext(ModalContext);
  const showModal = () => {
    setOpen(true);
  };
  return showModal;
};
