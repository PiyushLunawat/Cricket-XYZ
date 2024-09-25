import React, { useState } from "react";
import i1 from "../assets/img/G1.jpg";
import i2 from "../assets/img/G2.jpg";
import i3 from "../assets/img/G3.jpg";
import i4 from "../assets/img/G4.jpg";
import i5 from "../assets/img/G5.jpg";

const About = () => {
  const images = [i1, i2, i3, i4, i5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="mx-4 sm:mx-16 my-8 bg-black bg-opacity-50 text-white py-12 px-8  overflow-auto" style={{ height: 'calc(100vh - 125px)' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          About XYZ Cricket Organization
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-sm ">
            XYZ Cricket Organization is a leading sports body committed to organizing cricket tournaments across various formats. 
            Our organization has been actively involved in promoting the sport and offering opportunities for players at every level, 
            from grassroots to professional leagues. Our aim is to foster a community of cricket lovers, ensuring that the rich 
            heritage of this sport is preserved and celebrated.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">History</h2>
          <p className="text-sm">
            Established in 1995, XYZ Cricket Organization has successfully conducted over 500 cricket tournaments across national and 
            international levels. From local club matches to prestigious cricket leagues, our commitment to the sport has remained 
            strong throughout the years. We have worked with multiple cricket associations, providing platforms for budding cricketers 
            to showcase their talents and make their mark in the world of professional cricket.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tournaments and Leagues</h2>
          <p className="text-sm">
            XYZ Cricket Organization hosts a variety of cricket tournaments, including Twenty20 (T20), One-Day Internationals (ODI), 
            and Test matches. We have a rich history of organizing some of the most competitive leagues that have seen participation 
            from world-class players and teams. Our tournaments focus on creating thrilling cricket experiences for both players and 
            fans, with a commitment to fair play, innovation, and entertainment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
          <p className="text-sm">
            Take a trip down memory lane by visiting our photo gallery, showcasing moments from previous leagues and tournaments. 
            Whether it's a gripping match-winning shot or players celebrating their victories, our gallery captures the spirit and 
            excitement of cricket like no other.
          </p>
          <div className="relative w-full max-w-lg flex items-center justify-between mx-auto mt-6">
            <button onClick={prevSlide} className="  bg-green-500 text-2xl text-black px-3 py-1 rounded-md">
              &#8592;
            </button>

            <div className="overflow-hidden relative justify-center w-3/4 lg:w-full h-64 ">
              {images.map((img, index) => (
                <div key={index} className={`absolute top-0 left-0 w-full h-full px-2 py-4 bg-black transition-transform duration-500 ease-in-out transform ${
                index === currentIndex ? "translate-x-0" : "translate-x-full" }`} >
                  <img src={img} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div> 

            <button onClick={nextSlide} className="  bg-green-500 text-2xl text-black px-3 py-1 rounded-md">
              &#8594;
            </button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-sm">
            At XYZ Cricket Organization, our vision is to expand the reach of cricket and make it more accessible to players and 
            fans globally. We believe in nurturing talent at all levels, fostering sportsmanship, and bringing the thrill of cricket 
            to every corner of the world. Our organization is not just about organizing events, but about creating experiences that 
            leave lasting memories.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join the Cricket Revolution</h2>
          <p className="text-sm mb-8">
            Are you passionate about cricket? Whether you're a player, coach, or fan, we invite you to be a part of our journey. 
            Register for upcoming tournaments, check out our events, and connect with a community of cricket lovers!
          </p>
          <a
            href="/register"
            className="inline-block bg-green-500 text-black px-6 py-3 rounded hover:bg-green-600 transition duration-300"
          >
            Register Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
