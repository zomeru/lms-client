import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';

import Image from 'next/image';
import { toast } from 'react-toastify';

import { TextArea, TextInput } from '@/components/Input';
import { BookGenreType, IBook, ImageType } from '@/models/book';
import { db, storage } from '@/utils/firebase';
import Select from '@/components/Input/Select';
import { VALID_FILE_TYPES } from '@/constants';
import { useCol, useFileHandler } from '@/hooks';
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

  const bookFileRef = useRef<HTMLInputElement>(null);

  const [bookFileHandler, bookImages] = useFileHandler();

  const [genresData, loading] = useCol<{
    name: string;
    type: 'fiction' | 'non-fiction';
    active: boolean;
  }>(collection(db, 'genres'));

  const genres = useMemo(
    () =>
      genresData
        ?.map((item) => item.name)
        .sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;

          return 0;
        }),
    [genresData]
  );

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
    const newImages: ImageType[] = [];

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const imageRef = `books/${keyGenerator(i)}-${files[i].name}`;
        const storageRef = ref(storage, imageRef);
        const img = await uploadBytes(storageRef, files[i]);

        const imgUrl = await getDownloadURL(ref(storage, img?.ref.fullPath));

        const image = {
          url: imgUrl,
          ref: imageRef
        };

        if (img?.ref.fullPath) newImages.push(image);
      }
    }
    return newImages;
  };

  const handleAddBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const imagesUrls = await uploadImage(bookImages);

      console.log('imageUrls', images);

      let payload = {} as IBook;

      if (images) {
        const timestamp = serverTimestamp();

        payload = {
          title: title.trim(),
          author: author.trim(),
          genre: [genre as BookGenreType],
          summary: summary.trim(),
          copies: parseInt(copies, 10),
          createdAt: timestamp,
          updatedAt: timestamp,
          images: imagesUrls,
          available: parseInt(copies, 10),
          views: 0,
          borrowsCount: 0,
          rating: 0,
          totalRating: 0,
          likes: 0
          // bookRef
        };

        console.log('payload', payload);

        const addedBook = await addDoc(collection(db, 'books'), payload);

        if (addedBook) {
          toast.success('Book added successfully');

          setTitle('');
          setAuthor('');
          setGenre(genres ? genres[0] : '');
          setSummary('');
          setCopies('');
          setImages([]);

          setTimeout(() => {
            setSelected('Books');
          }, 100);
        }
      }
    } catch (error) {
      const err: any = error;
      console.log('add book error', err);
      toast.error("Something wen't wrong. Failed to add book.");
      // setAddBookError("Something wen't wrong. Failed to add book.");
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
          required
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
          {!loading && genres && genres.length > 0 && (
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
      </div>
    </StyledAddBook>
  );
};

export default AddBook;
