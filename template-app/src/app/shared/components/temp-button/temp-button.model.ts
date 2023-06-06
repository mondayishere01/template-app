export interface IRMButtonActionItemConfig {
  name: string;
  value?: any;
  disabled?: boolean;
  icon?: string;
  isSeprator?: boolean;
  child?: IRMButtonActionItemConfig[];
}
