"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

const Form = () => {
  
 
const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isValidEmail) {
      console.log('Form submitted successfully');
    } else {
      console.log('Invalid email format. Please correct the email.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Updates in your inbox…'
          value={email}
          onChange={handleEmailChange}
          className={`placeholder:text-sm border ${!isValidEmail ? 'border-orange text-orange' : 'border-silver'
            } p-2 rounded-3xl outline-none focus:border-blue-500`}
        />
        {!isValidEmail && (
          <p className="text-orange text-sm italic text-center">Please insert a valid Email.</p>
        )}
      </div>
      <button
        type="submit"
        className="w-20 h-11 text-sm p-2 text-white rounded-3xl bg-orange shadow-lg hover:bg-orange-pale"
        disabled={!isValidEmail}
      >
        Go
      </button>
    </form>
  );
};

export default Form;