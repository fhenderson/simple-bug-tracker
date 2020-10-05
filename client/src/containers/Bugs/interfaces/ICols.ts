import { IBugs } from '../dummyData'

export interface ICols {
  id: keyof IBugs;
  label: string;
  minWidth?: number;
  align: string;
  numeric: boolean
}
