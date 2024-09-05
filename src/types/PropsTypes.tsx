import {
  type TOnClickEvent,
  type TWidth,
  type TScope,
  type TScopeReq,
  type TAlertSeverity,
  type TClient,
  type TClientRequest,
  type TFormRequestValues,
  TRole,
  TRoleReq,
  TUser,
  TUserReq,
  TChangePassword,
} from "./DataTypes";
import { FormikProps } from "formik";

// Common
export type TAlertContextProps = {
  children: React.ReactNode;
};

export type TColorContextProps = {
  children: React.ReactNode;
};

export type TOkButtonClicked = (values: TFormRequestValues) => void;

// Window Bar Component
export type TWindowBarProps = {
  onNewButtonClick: TOnClickEvent;
  title?: string;
  subtitle?: string;
};

// Dialog Component
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

// SnackBar Component
export type TAlertSnackbarProps = {
  open: boolean;
  message: string;
  severity: TAlertSeverity;
  title: string;
  duration: number;
  handleClose: () => void;
};

// MultiSelect Component
export type TMultiSelectProps = {
  id?: string;
  name: string;
  value?: string[];
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined
    | any;
  onBlur?:
    | React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  error?: boolean;
  label?: React.ReactNode;
  margin?: "normal" | "dense" | "none";
  enums: string[];
};

// Scope
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

export type TClientFormProps = {
  formik?: FormikProps<TClientRequest>;
};

export type TClientCreatedDialogProps = {
  client: TClient;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// Roles
export type TRoleTableProps = {
  data: TRole[];
};

export type TRoleDialogProps = {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  newRecordCallback: (record: TRole) => void;
};

export type TRoleFormProps = {
  formik?: FormikProps<TRoleReq>;
};

// User
export type TUserTableProps = {
  data: TUser[];
};

export type TUserDialogProps = {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  newRecordCallback: (record: TUser) => void;
};

export type TUserFormProps = {
  formik?: FormikProps<TUserReq>;
};

export type TDashboardCardProps = {
  title: string;
  value: string;
  subvalue?: string;
  footer?: string;
};

export type TChangePasswordDialog = {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export type TChangePasswordFormProps = {
  formik?: FormikProps<TChangePassword>;
};