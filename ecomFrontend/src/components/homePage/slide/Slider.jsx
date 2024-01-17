import React, { useState, useEffect } from 'react';


const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    }, 3500); // Change slide every 3.5 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, [length]);

  return (
    <section className="relative flex justify-center items-cente">
      {images.map((image, index) => (
        <div
          className={index === current ? 'opacity-100 transition duration-1000' : 'opacity-0 transition duration-1000 ease-out'}
          key={index}
        >
          {index === current && (<img src={image} alt='image slider' className="w-full h-full object-cover"/>)}
        </div>
      ))}
    </section>
  );
};

export default Slider;
