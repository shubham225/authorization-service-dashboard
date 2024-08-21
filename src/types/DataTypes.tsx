export type TWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TAlertSeverity = 'error' | 'info'| 'success' | 'warning'
export type THTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type TButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
export type TOnClickEvent = (e: TButtonClickEvent) => void;

export type TScope = {
    id : number,
    scope: string,
    description: string
  }

export type TScopeReq = Omit<TScope, "id">;

export type TAlert = {
  open : boolean,
  message : string,
  severity : TAlertSeverity,
  title : string
}

export type TAppContext = {
  alert : TAlert
}

export type TAppContextType = {
  appContext: TAppContext
  setAppContext: React.Dispatch<React.SetStateAction<TAppContext>>
};

export type TErrorBackend = Omit<TAlert, "open">;