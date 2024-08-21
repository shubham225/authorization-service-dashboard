import { JsxElement } from "typescript";
import { type TOnClickEvent, type TWidth, type TScope, TScopeReq, TAlertSeverity } from "./DataTypes"

export type TWindowBarProps = {
  onNewButtonClick : TOnClickEvent
};

export type TAlertContextProps = {
  children          : React.ReactNode,
}

export type TDialogWindowProps = {
  open              : boolean, 
  setOpen           : React.Dispatch<React.SetStateAction<boolean>>,
  title             : string,
  maxWidth          : TWidth,
  okButtonLabel     : string,
  closeButtonLabel  : string,
  children          : React.ReactNode,
  okButtonIcon      : React.ReactNode,
  onOkButtonClick   : TOnClickEvent,
  onCloseButtonClick: TOnClickEvent
};

export type TScopeTableProps = {
  data : TScope[]
};

export type TScopeDialogProps = {
openDialog    : boolean,
setOpenDialog : React.Dispatch<React.SetStateAction<boolean>>,
newRecordCallback : (record: TScope) => void
};

export type TScopeDataProps = {
  scope    : TScopeReq,
  setScope : React.Dispatch<React.SetStateAction<TScopeReq>>,
}

export type TAlertSnackbarProps = {
  open        : boolean,
  message     : string,
  severity    : TAlertSeverity,
  title       : string,
  handleClose : () => void
}