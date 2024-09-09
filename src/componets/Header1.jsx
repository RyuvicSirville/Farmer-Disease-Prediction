import * as React from "react";

function Header1() {
  return (
    <header className="relative w-full min-h-[250px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcfa821a04cd160fb0231a3ec38604bd0c37f789817e1ec4c0aeeb06c146ce91?placeholderIfAbsent=true&apiKey=a5133eae759340528ac95bbb68c7115c"
        alt=""
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div className="relative flex flex-col items-center justify-center px-10 py-20 w-full h-full bg-zinc-900 bg-opacity-40 max-md:px-5 max-md:py-12 max-md:max-w-full">
        <div className="flex flex-col items-center text-center w-full max-w-[1176px] max-md:max-w-full">
          <h1 className="text-5xl font-bold max-md:text-3xl">
            Welcome to AArogyam Farmer Portal!
          </h1>
          <p className="mt-4 text-xl text-gray-100 max-md:text-lg">
            Empowering farmers with AI tools for success and sustainable agriculture.
          </p>
          <button
            className="px-6 py-3 mt-6 text-lg leading-loose bg-violet-600 rounded-lg 
            hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header1;
