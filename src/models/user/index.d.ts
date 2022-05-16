import { FieldValue } from 'firebase/firestore';

export type IRole = 'Admin' | 'User';
export type IGender = 'Male' | 'Female' | 'Other';

export interface IUser {
  id?: string;
  username: string;
  firstName: string;
  lastName: string;
  gender?: IGender | null;
  age?: number | null;
  email: string;
  photoUrl?: string | null;
  password: string;
  role: IRole[];
  createdAt: FieldValue;
  setupComplete: boolean;
}
