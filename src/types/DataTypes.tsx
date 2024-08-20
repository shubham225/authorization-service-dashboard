export type TWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
export type TOnClickEvent = (e: TButtonClickEvent) => void;

export type TScope = {
    id : number,
    scope: string,
    description: string
  }