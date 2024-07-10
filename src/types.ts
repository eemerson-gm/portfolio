export type Component<T = {}> = React.FC<T>;
export type Wrapper<T = {}> = React.FC<React.PropsWithChildren<T>>;
