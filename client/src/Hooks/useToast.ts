import { ToastContext } from "@/context/ToastContext";
import { useContext } from "react";
// interface ToastInterface{
//     setOpen:<boolean>

// }

export const useToast = () => {
  const { setOpen, setType, setMessage }: any = useContext(ToastContext);

  const showToast = (msg = "Alert message!", type = "success") => {
    setType(type);
    setMessage(msg);
    setOpen(true);
  };
  return showToast;
};
