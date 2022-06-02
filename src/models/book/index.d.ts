import { FieldValue } from 'firebase/firestore';

import { IGenreFiction, IGenreNonFiction } from './genre';

export type BookGenreType = IGenreFiction | IGenreNonFiction;
export type ImageType = {
  url: string;
  ref?: string;
};

export interface IBook {
  id?: string;
  title: string;
  author: string;
  genre: Array<BookGenreType>;
  copies: number;
  available?: number;
  summary: string;
  characters?: string[];
  images: ImageType[];
  createdAt: FieldValue;
  updatedAt?: FieldValue;
  views?: number;
  borrowsCount?: number;
  rating?: number;
  totalRating?: number;
  likes?: number;
}
