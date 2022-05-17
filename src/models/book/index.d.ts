import { FieldValue } from 'firebase/firestore';

import { IGenreFiction, IGenreNonFiction } from './genre';

export interface IBook {
  id?: string;
  title: string;
  author: string;
  genre: Array<IGenreFiction | IGenreNonFiction>;
  copies: number;
  summary: string;
  characters: string[];
  photoUrl: string;
  createdAt: FieldValue;
  updatedAt: FieldValue;
}
