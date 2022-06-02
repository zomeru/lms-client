import { FieldValue } from 'firebase/firestore';

export type BorrowRequestStatus = 'pending' | 'approved' | 'rejected';

export interface IBorrowRequest {
  id?: string;
  bookId: string;
  user: string;
  status: BorrowRequestStatus;
  createdAt: FieldValue;
  updatedAt?: FieldValue;
}
