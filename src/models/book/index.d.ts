import { FieldValue } from 'firebase/firestore';

import { IGenreFiction, IGenreNonFiction } from './genre';

export type BookGenreType = IGenreFiction | IGenreNonFiction;

export interface IBook {
  id?: string;
  title: string;
  author: string;
  genre: Array<BookGenreType>;
  copies: number;
  available?: number;
  summary: string;
  characters?: string[];
  imageUrls: string[];
  createdAt: FieldValue;
  updatedAt?: FieldValue;
}
