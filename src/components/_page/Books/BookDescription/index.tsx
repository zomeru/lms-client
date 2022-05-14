import React from 'react';
import Image from 'next/image';

import { Section, SimpleButton } from '@/components';
import { StyledBookDescription } from './style';

const BookDescription = () => {
  const image =
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fkkhp1-lg.jpg';

  const handleBorrowBook = () => {};

  return (
    <Section>
      <StyledBookDescription>
        <div className="book-des-container">
          <div className="image-container">
            <div className="image-wrapper">
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <SimpleButton
              text="Borrow"
              onClick={handleBorrowBook}
              className="borrow-button"
            />
          </div>
          <div className="des-container">
            <h3 className="book-title ">
              Harry Potter and the Sorcerer&apos;s Stone
            </h3>
            <h4 className="book-author">Author: Zomeru</h4>
            <p className="book-genre">Genre: Fiction</p>
            <p className="book-avail-copies">Available copies: 3</p>

            <div className="book-des-header">Book summary</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              nesciunt tenetur saepe molestias sint sequi! Odit veritatis
              recusandae totam laborum ullam alias ratione molestias sequi
              laudantium ipsa tempora consectetur a, accusamus esse ea deserunt
              commodi dicta! Vitae quaerat eveniet est nisi expedita, tenetur
              maxime dolores tempore perspiciatis blanditiis eligendi
              voluptatibus pariatur exercitationem dolorem at. Pariatur
              blanditiis quis fugiat commodi a.
            </p>

            <div className="book-des-header">Book characters</div>
            <p>
              Zomer Gregorio, Mark Joseph Yoldi, Lourence Jacaba, Joshua Pamisa,
              and Hannah Julieta Cabalo.
            </p>
          </div>
        </div>
      </StyledBookDescription>
    </Section>
  );
};

export default BookDescription;
