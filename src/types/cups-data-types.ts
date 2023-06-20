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

export type TColor = {
  color: string,
  id: string
};

export type TCustomization = {
  colors: Array<TColor>,
  checkedColor: string,
  setCheckedColor: (arg0: string) => void,
  cupColor: string,
  setCupColor: (arg0: string) => void,
  constructorView: boolean,
  setConstructorView: (arg0: boolean) => void,
  colorView: boolean ,
  setColorView: (arg0:boolean) => void,
  backgroundView: boolean,
  setBackgroundView: (arg0:boolean) => void,
  logoView: boolean,
  setLogoView: (arg0:boolean) => void
};