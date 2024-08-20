import { type TOnClickEvent, type TWidth, type TScope } from "./DataTypes"

export type TWindowBarProps = {
  onNewButtonClick : TOnClickEvent
};

export type TDialogWindowProps = {
  open              : boolean, 
  setOpen           : React.Dispatch<React.SetStateAction<boolean>>,
  title             : string,
  maxWidth          : TWidth,
  okButtonLabel     : string,
  closeButtonLabel  : string,
  children          : React.ReactNode,
  onOkButtonClick   : TOnClickEvent
};

export type TScopeTableProps = {
  data : TScope[]
};

export type TScopeDialogProps = {
openDialog    : boolean,
setOpenDialog : React.Dispatch<React.SetStateAction<boolean>>,
};