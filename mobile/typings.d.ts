declare module "*.json" {
  const value: any;
  export default value;
}

declare module "@env" {
  export const IP_ADDRESS: string;
}
