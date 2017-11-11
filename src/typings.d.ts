/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface PLUEntry {
  PLU: number,
  Category: string,
  Commodity: string,
  Variety: string,
  Botanical: string
}

declare module "*.json" {
  const value: any;
  export default value;
}