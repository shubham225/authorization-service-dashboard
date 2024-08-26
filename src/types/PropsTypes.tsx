import { SelectChangeEvent } from "@mui/material";
import {
  type TOnClickEvent,
  type TWidth,
  type TScope,
  type TScopeReq,
  type TAlertSeverity,
  type TClient,
  type TClientRequest,
  type TFormRequestValues,
} from "./DataTypes";
import { FormikProps } from "formik";
import { ReactNode } from "react";

export type TWindowBarProps = {
  onNewButtonClick: TOnClickEvent;
  title?: string;
  subtitle?: string;
};

export type TAlertContextProps = {
  children: React.ReactNode;
};

export type TColorContextProps = {
  children: React.ReactNode;
};

export type TOkButtonClicked = (values: TFormRequestValues) => void;

export type TDialogWindowProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  maxWidth: TWidth;
  okButtonLabel: string;
  closeButtonLabel: string;
  children: React.ReactNode;
  okButtonIcon: React.ReactNode;
  yupSchema: any;
  initData: any;
  onOkButtonClick: TOkButtonClicked;
  onCloseButtonClick: TOnClickEvent;
};

export type TAlertSnackbarProps = {
  open: boolean;
  message: string;
  severity: TAlertSeverity;
  title: string;
  handleClose: () => void;
};

export type TScopeTableProps = {
  data: TScope[];
};

export type TScopeDialogProps = {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  newRecordCallback: (record: TScope) => void;
};

export type TScopeFormProps = {
  formik?: FormikProps<TScopeReq>;
};

// Client
export type TClientTableProps = {
  data: TClient[];
};

export type TClientDialogProps = {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  newRecordCallback: (record: TClient) => void;
};

export type TClientDataProps = {
  client: TClientRequest;
  setClient: React.Dispatch<React.SetStateAction<TClientRequest>>;
};

export type TClientFormProps = {
  formik?: FormikProps<TClientRequest>;
};

export type TMultiSelectProps = {
  id?:         string;
  name:        string;
  value?:       string[];
  onChange?:    React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined | any;
  onBlur?:     React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  error?:      boolean;
  label?:      React.ReactNode;
  margin?:     "normal" | "dense" | "none" ;
  enums:       string[];
};

export type TClientCreatedDialog = {
  client: TClient;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}