import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    imageSrc: "https://media.istockphoto.com/id/1205325344/photo/farmer-in-agricultural-field.webp?s=612x612&w=is&k=20&c=F7mrwovvhM4QRMsDspUPUipea3JEeSM52qNhsFeUUf4=",
    name: "Ramesh Behera",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d86df3d624d140beb43a1f8bf941cd8db414ee4eec4c3c3d913826bc02d210b?placeholderIfAbsent=true&apiKey=a5133eae759340528ac95bbb68c7115c",
    testimonial: "AArogyam revolutionized my farm's productivity!"
  },
  {
    imageSrc: "https://img.freepik.com/premium-photo/indian-farmer-holding-tomato-hands-happy-farmer_898049-99.jpg?w=1380",
    name: "Hemanta khatua",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e95f87f6d67d2cc57627631cc373a3af3eb041327b0ce432bed48fe42cb2b84?placeholderIfAbsent=true&apiKey=a5133eae759340528ac95bbb68c7115c",
    testimonial: "Efficient and user-friendly, highly recommend for deseases diagnosis!"
  },
  {
    imageSrc: "https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/features/251017indian-farmer-in-biharm.defreesecimmyt.jpg?itok=l61sULc4",
    name: "Gunanidhi pradhan",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a146133ccadf08d501858393f8cf00fca7e955bd9e3ac7faf75f0796cba34ad?placeholderIfAbsent=true&apiKey=a5133eae759340528ac95bbb68c7115c",
    testimonial: "Arrogyam is a blessings for livestocks."
  }
];

const TestimonialSection = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20  bg-white max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1176px] max-md:max-w-full">
        <h2 className="text-4xl leading-snug text-center rotate-[2.4492937051703357e-16rad] text-zinc-900 max-md:max-w-full">
          Hear from our awesome users!
        </h2>
        <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col w-[33%]  shadow-xl max-md:ml-0 max-md:w-full">
                <TestimonialCard {...testimonial}  />
              </div>
            ))}
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </section>
  );
};

export default TestimonialSection;