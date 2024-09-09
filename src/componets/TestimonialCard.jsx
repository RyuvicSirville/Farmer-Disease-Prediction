import React from 'react';

const TestimonialCard = ({ imageSrc, name, rating, testimonial }) => {
  return (
    <article className="flex flex-col items-start pt-6 pr-16 pb-16 pl-6 mx-auto w-full bg-white rounded-lg shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:px-5 max-md:mt-8">
      <header className="flex gap-6 text-2xl font-bold text-zinc-700">
        <img loading="lazy" src={imageSrc} alt={`${name}'s profile`} className="object-contain shrink-0 w-16 aspect-square rounded-[32px]" />
        <div className="flex flex-col self-start">
          <h3 className="rotate-[2.4492937051703357e-16rad]">{name}</h3>
          <img loading="lazy" src={rating} alt={`${name}'s rating`} className="object-contain max-w-full aspect-[5] w-[100px]" />
        </div>
      </header>
      <p className="mt-6 text-base leading-7 rotate-[2.4492937051703357e-16rad] text-zinc-900">
        {testimonial}
      </p>
    </article>
  );
};

export default TestimonialCard;