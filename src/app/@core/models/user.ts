export interface User {
  id: string;
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  password?: string;
  groups?: any;
  displayName?: string;
  photoURL?: string;
  location: any;
}
