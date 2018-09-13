import { Location } from './location';
export interface User {
  id: number;
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  password?: string;
  groups?: any;
  displayName?: string;
  photoURL?: string;
  location: Location;
  createdAt?: any;
}
