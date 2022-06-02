import { FieldValue } from 'firebase/firestore';
import { IGenreFiction, IGenreNonFiction } from '../book/genre';

export type BorrowRequestStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'returned'
  | 'cancelled';
export interface IBorrowRequest {
  id?: string;
  bookId: string;
  user: string;
  status: BorrowRequestStatus;
  createdAt: FieldValue;
  imageUrl: string;
  title: string;
  genre: IGenreFiction | IGenreNonFiction;
  updatedAt?: FieldValue;
}
