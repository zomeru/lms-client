import { FieldValue } from 'firebase/firestore';

export type IRole = 'Admin' | 'User';
export type IGender = 'Male' | 'Female' | 'Other';

export interface IUser {
  id?: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender?: IGender | null;
  age?: number | null;
  photoUrl?: string | null;
  role: IRole[];
  createdAt: FieldValue;
  setupComplete: boolean;
}
