export type TParameters ={
  name: string,
  value: string
};

export type TCup = {
  id: string,
  name: string,
  title: string,
  parameters: Array<TParameters>
};

export type TCupTypes = {
  id: string,
  name: string,
  title: string,
  types: Array<TCup>
};

export type TData = {
  cups: Array<TCupTypes>,
  tShirts: Array<any>,
  caps: Array<any>
};

