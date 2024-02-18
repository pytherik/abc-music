export type SelectedKey = {
  id: number;
  flat: string;
  mode: string;
  longName: string;
  parallel: number;
  parallelName?: string;
  sub: number;
  dom: number;
  pitch?: string;
  accidental: string;
  name: string;
  pos: number[];
  notes: string[][];
  fingers: string[][];
}