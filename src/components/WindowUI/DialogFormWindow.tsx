import React, { ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { TDialogWindowProps } from "types/PropsTypes";
import { TButtonClickEvent, TScopeReq } from "types/DataTypes";
import { Formik, FormikHelpers, FormikProps } from "formik";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const DialogFormWindow = (props: TDialogWindowProps) => {
  const {
    open,
    title,
    maxWidth,
    okButtonLabel,
    okButtonIcon,
    closeButtonLabel,
    children,
    yupSchema,
    initData,
    setOpen,
    onOkButtonClick,
    onCloseButtonClick,
  } = props;

  const handleSubmit = (value: TScopeReq, formik: FormikHelpers<TScopeReq>) => {
    onOkButtonClick(value);

    formik.resetForm();
    setOpen(false);
  };

  const handleClose = (
    e: TButtonClickEvent,
    formik: FormikProps<TScopeReq>
  ) => {
    e.preventDefault();

    onCloseButtonClick(e);

    formik.resetForm();
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initData}
        validationSchema={yupSchema}
        onSubmit={(values, formik) => handleSubmit(values, formik)}
      >
        {(formik) => (
          <BootstrapDialog
            open={open}
            maxWidth={maxWidth ? maxWidth : "md"}
            PaperProps={{
              style: {
                width: "-webkit-fill-available",
              },
              component: "form",
              onSubmit: (event: any) => {
                event.preventDefault();
                formik.handleSubmit();
              },
            }}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              {title}
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={(e) => handleClose(e, formik)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              {React.Children.map<ReactNode, ReactNode>(children, (child) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child as any, { formik: formik });
                }
              })}
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                type="submit"
                variant="contained"
                startIcon={okButtonIcon}
              >
                {okButtonLabel}
              </Button>
              <Button
                startIcon={<CloseIcon />}
                variant="outlined"
                type="reset"
                onClick={(e) => handleClose(e, formik)}
              >
                {closeButtonLabel ? closeButtonLabel : "Close"}
              </Button>
            </DialogActions>
          </BootstrapDialog>
        )}
      </Formik>
    </React.Fragment>
  );
};
