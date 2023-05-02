import { Alert, Button, IconButton, Stack } from "@mui/material";
import React, { createContext, useState } from "react";
import { Snackbar } from "@mui/material";
interface dol {
  children: any;
  severity: string;
}

export const ToastContext = createContext({});

export const ToastProvider = ({ children }: dol) => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState<string>();
  const [message, setMessage] = React.useState<string>();

  const handleClose = () => {
    setOpen(false);
    setMessage("");
    setType("");
  };

  return (
    <ToastContext.Provider value={{ setType, setMessage, setOpen }}>
      {children}

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          ></Alert>
        </Snackbar>
        <Alert severity={type} />
      </Stack>
    </ToastContext.Provider>
  );
};
