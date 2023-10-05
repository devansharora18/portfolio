import React from "react";

const About = () => {
  return (
    <section
      className="h-[100vh] w-[100%] flex flex-col justify-center items-center relative z-50"
      id="about"
    >
      {/*<h2 className="text-4xl font-bold mb-4 text-white">About</h2> Change text color to white*/}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
			<h1 className="text-4xl py-5 font-bold tracking-tight text-gray-100 sm:text-6xl">
				About Me
			</h1>
            <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Who I am
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
			Hello there! I'm not your average developer; I'm a true tech enthusiast with a passion for exploring the vast world of technology. Beyond writing code, I thrive on experimenting with different operating systems on both my phone and laptop, always eager to stay on the cutting edge of what's possible in the tech realm.

When I'm not immersed in the world of software development, you'll often find me diving into thrilling video games like Valorant, where precision and strategy are key. But my competitive spirit doesn't stop there; I'm also a skilled chess player, having proudly represented my region in state-level chess tournaments.
            </p>
			</div>
        <div className="flex justify-center items-center opacity-30 lg:opacity-100">
          <img
            src="/code.svg"
            alt="Code Icon"
            className="h-64 w-64 mr-4 absolute top-2 left-2" // Enlarge code.svg and move it to top left
          />
          <img
            src="/chess.svg"
            alt="Chess Icon"
            className="h-64 w-64 absolute bottom-2 right-2" // Enlarge chess.svg and move it to bottom right
          />
        </div>
      </div>
    </section>
  );
};

export default About;
