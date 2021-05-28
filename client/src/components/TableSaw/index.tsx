export type TSContents = Array<{
  data: { [key: string]: { value: string; isPrice: boolean; menu: boolean } };
  id: string;
}>;

export { default } from './TableSaw';
