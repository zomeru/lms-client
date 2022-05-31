import React, { useState, useEffect, useRef } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import {
  collection,
  getDocs,
  serverTimestamp,
  addDoc
} from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { useUploadFile } from 'react-firebase-hooks/storage';

import { TextArea, TextInput } from '@/components/Input';
import { BookGenreType, IBook } from '@/models/book';
import { db, storage } from '@/utils/firebase';
import Select from '@/components/Input/Select';
import { VALID_FILE_TYPES } from '@/constants';
import { useFileHandler } from '@/hooks';
import Image from 'next/image';
import { keyGenerator } from '@/utils/functions';
import { StyledAddBook } from './style';

export interface AddBookProps {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const AddBook = ({ setSelected }: AddBookProps) => {
  // inputs
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState<BookGenreType | string>('');
  const [summary, setSummary] = useState('');
  const [copies, setCopies] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const [genres, setGenres] = useState<BookGenreType[]>([]);
  const bookFileRef = useRef<HTMLInputElement>(null);

  const [addBookError, setAddBookError] = useState('');

  const [bookFileHandler, bookImages] = useFileHandler();
  const [uploadFile] = useUploadFile();

  // console.log('bookImages', bookImages);

  useEffect(() => {
    async function getAllGenres() {
      try {
        const querySnapshot = await getDocs(collection(db, 'genres'));

        if (querySnapshot) {
          const newGenres = querySnapshot.docs.map((doc) => {
            return doc.data().name as BookGenreType;
          });

          const sortedGenres = newGenres.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;

            return 0;
          });

          setGenres(sortedGenres);
          setGenre(sortedGenres[0]);
        }
      } catch (error) {
        console.log('get all books error', error);
      }
    }

    getAllGenres();
  }, []);

  useEffect(() => {
    if (bookImages) {
      let imgs: string[] = [];

      bookImages.forEach((img) => {
        const parsedPic = URL.createObjectURL(img);
        imgs = [parsedPic, ...imgs];
      });

      setImages(imgs);
    }
  }, [bookImages]);

  const uploadImage = async (files: File[]) => {
    const imgUrls: string[] = [];

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const storageRef = ref(
          storage,
          `books/${keyGenerator(i)}-${files[i].name}`
        );
        const img = await uploadFile(storageRef, files[i]);
        // const img = await uploadBytes(storageRef, files[i]);

        console.log('img', img);

        const imgUrl = await getDownloadURL(ref(storage, img?.ref.fullPath));
        console.log('imgUrl', imgUrl);

        if (img?.ref.fullPath) imgUrls.push(imgUrl);
      }
    }
    return imgUrls;
  };

  const handleAddBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const imageUrls = await uploadImage(bookImages);

      let payload = {} as IBook;

      if (imageUrls) {
        payload = {
          title: title.trim(),
          author: author.trim(),
          genre: [genre as BookGenreType],
          summary: summary.trim(),
          copies: parseInt(copies, 10),
          createdAt: serverTimestamp(),
          imageUrls,
          available: parseInt(copies, 10)
        };

        const addedBook = await addDoc(collection(db, 'books'), payload);

        if (addedBook) {
          setTitle('');
          setAuthor('');
          setGenre(genres[0]);
          setSummary('');
          setCopies('');
          setImages([]);
        }

        setTimeout(() => {
          setSelected('books');
        }, 100);
      }
    } catch (error) {
      console.log('add book error', error);
      setAddBookError("Something wen't wrong. Failed to add book.");
    }
  };

  const renderImage = () => {
    return (
      <>
        <button
          type="button"
          className="add-img-btn"
          onClick={() => bookFileRef.current?.click()}
        >
          + Add Image
        </button>
        <input
          ref={bookFileRef}
          className="hidden-img-input"
          accept={VALID_FILE_TYPES.join(',')}
          multiple
          type="file"
          onChange={bookFileHandler}
        />
      </>
    );
  };

  return (
    <StyledAddBook action="" onSubmit={handleAddBook}>
      <div className="header">
        <button
          type="button"
          className="back-btn"
          onClick={() => setSelected('Books')}
        >
          <BsArrowLeft className="back-btn-icon" />
        </button>

        <h2 className="header-title">Add Book</h2>
      </div>
      <div className="book-details">
        {bookImages.length > 0 ? (
          <div className="image-container spacing">
            {images.length > 0 && (
              <Image
                className="image"
                src={images[0]}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            )}
          </div>
        ) : (
          <div className="add-img spacing">{renderImage()}</div>
        )}

        <div className="input-container">
          <TextInput
            className="spacing"
            id="book-title"
            label="Title"
            type="text"
            value={title}
            setValue={setTitle}
            inputProps={{
              required: true
            }}
          />
          <TextInput
            className="spacing"
            id="book-author"
            label="Author"
            type="text"
            value={author}
            setValue={setAuthor}
            inputProps={{
              required: true
            }}
          />
          <TextArea
            className="spacing"
            id="book-summary"
            label="Summary"
            rows={5}
            value={summary}
            setValue={setSummary}
            inputProps={{
              required: true
            }}
          />
          <TextInput
            className="spacing"
            id="book-copies"
            label="Copies"
            type="number"
            value={copies.toString()}
            setValue={setCopies}
            inputProps={{
              required: true
            }}
          />
          {genres.length > 0 && (
            <Select
              className="spacing"
              id="book-genres"
              label="Genre"
              options={genres}
              selectedValue={genre}
              setSelectedValue={setGenre}
              inputProps={{
                required: true
              }}
            />
          )}
        </div>

        <button type="submit" className="add-book-btn spacing">
          Add Book
        </button>

        {addBookError && <p className="error-text">{addBookError}</p>}
      </div>
    </StyledAddBook>
  );
};

export default AddBook;
