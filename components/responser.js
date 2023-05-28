import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";
import { setNotification } from "../redux/slices/notification";
import { useDispatch } from "react-redux";

export default function Messages({
  open,
  setOpen,
  message,
  vertical,
  horizontal,
  severity,
  autoHideDuration,
}) {
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setNotification({ open: false }));
    setOpen && setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>

      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={2000 || autoHideDuration}
      onClose={handleClose}
      action={action}
      key={vertical + horizontal}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
      {/* Add any audio file */}
        <audio
          id="audioFile"
          autoPlay
          src="/notification.mp3"
        />
        {message}
      </Alert>
    </Snackbar>
  );
}