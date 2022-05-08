import React from 'react';
import Image from 'next/image';

import Section from '@/components/Section';
import { ContactImage } from '@/assets/';
import { StyledContact, StyledContactForm } from './style';

const Contact = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const inputData = [
    {
      id: 'first-name',
      value: firstName,
      setAction: setFirstName,
      placeholder: 'First Name',
      type: 'text'
    },
    {
      id: 'last-name',
      value: lastName,
      setAction: setLastName,
      placeholder: 'Last Name',
      type: 'text'
    },
    {
      id: 'email',
      value: email,
      setAction: setEmail,
      placeholder: 'Email',
      type: 'email'
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit');
  };

  return (
    <Section>
      <StyledContact>
        <h2 className="header-title">Contact</h2>
        <StyledContactForm onSubmit={handleSubmit}>
          <div className="image-container">
            <Image
              src={ContactImage}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="input-container">
            <h2 className="contact-input-header">Get In Touch</h2>
            {inputData &&
              inputData.map(({ id, value, setAction, placeholder, type }) => (
                <div className="input-wrapper" key={`${id}_${placeholder}`}>
                  <label htmlFor={id} className="input-label">
                    {placeholder}
                  </label>
                  <input
                    placeholder={placeholder}
                    className="input-text"
                    type={type}
                    value={value}
                    onChange={(e) => {
                      setAction(e.target.value);
                    }}
                    id={id}
                    required
                  />
                </div>
              ))}
            <div className="input-wrapper">
              <label htmlFor="message" className="input-label">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="input-text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                id="message"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </StyledContactForm>
      </StyledContact>
    </Section>
  );
};

export default Contact;
