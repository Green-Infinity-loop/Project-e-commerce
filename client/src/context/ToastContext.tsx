import { Alert, Button, IconButton, Stack } from "@mui/material";
import React, { createContext, useState } from "react";
import { Snackbar } from "@mui/material";

interface ToastContextProps {
  setType: React.Dispatch<React.SetStateAction<string | undefined>>;
  setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();

  const handleClose = () => {
    setOpen(false);
    setMessage(undefined);
    setType(undefined);
  };

  const toastContextValue: ToastContextProps = {
    setType: setType,
    setMessage: setMessage,
    setOpen: setOpen,
  };

  return (
    <ToastContext.Provider value={toastContextValue}>
      {children}

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={type as any} sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </ToastContext.Provider>
  );
};