"use client";

import React, { useState } from "react";
import Image from "next/image";

// Separate Card component
const Card = ({ img, content, ceo, ceoImg }) => (
  <div className='w-full rounded-lg shadow-md lg:max-w-sm mx-auto bg-gray-200 p-4'>
    <div className='flex justify-center mt-4'>
      <Image
        className='object-contain w-20 h-20'
        src={img}
        alt={ceo}
        width={80}
        height={80}
      />
    </div>
    <div className='p-4 text-center'>
      <p className='mb-2 leading-normal max-h-24 overflow-hidden'>{content}</p>
      <div className='flex justify-center items-center mt-4'>
        <Image
          className='w-10 h-10 rounded-full mr-2'
          src={ceoImg}
          alt={ceo}
          width={40}
          height={40}
        />
        <p className='text-md font-medium'>{ceo}</p>
      </div>
    </div>
  </div>
);

const CardComponent = () => {
  const [current, setCurrent] = useState(0);
  const posts = [
    {
      img: "https://imgs.search.brave.com/zaciroqLKCK1NBVm1uaMyYpY88j1HuEafwm1fOtlr60/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NaWNyb3Nv/ZnQvTWljcm9zb2Z0/LUxvZ28ud2luZS5z/dmc.svg",
      content:
        "Microsoft Corporation is an American multinational technology company which produces computer software, consumer electronics, personal computers, and related services.",
      ceo: "Satya Nadella",
      ceoImg:
        "https://cdn.britannica.com/11/181311-050-A509D24F/Satya-Nadella-Microsoft.jpg?w=385",
    },
    {
      img: "https://imgs.search.brave.com/QMTmKqxACx6h7vk_i0v4YseDYcz7Q6lwm5ovzxdf36E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Hb29nbGUv/R29vZ2xlLUxvZ28u/d2luZS5zdmc.svg",
      content:
        "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
      ceo: "Sundar Pichai",
      ceoImg:
        "https://cdn.britannica.com/42/193142-050-F69B1A23/Sundar-Pichai-Google.jpg",
    },
    {
      img: "https://imgs.search.brave.com/YyeHuD3Sivh7ukU0FAVsgFVuJm7XZqP9yue2X2noYcc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NZXRhX1Bs/YXRmb3Jtcy9NZXRh/X1BsYXRmb3Jtcy1M/b2dvLndpbmUuc3Zn.svg",
      content:
        "Meta Platforms, Inc., doing business as Meta and formerly known as Facebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.",
      ceo: "Mark Zuckerberg",
      ceoImg:
        "https://imgs.search.brave.com/5wmYHgTChfjX-hVhtiJg0wX73MRAS0WZSktcHEHLlAU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzY2/MzRjYWFiZWMwYzY5/NjU2OTAwOWYyYz93/aWR0aD03MDA",
    },
    {
      img: "https://imgs.search.brave.com/0inKegGKJVeGDi5U6E1BuREDZUjnEIVYK537lE6RUVc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9BbWF6b25f/KGNvbXBhbnkpL0Ft/YXpvbl8oY29tcGFu/eSktTG9nby53aW5l/LnN2Zw.svg",
      content:
        "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.",
      ceo: "Andy Jassy",
      ceoImg:
        "https://imgs.search.brave.com/xvyZ54EWdPtEhf58o49aeBARiJHfOCV8whPgFIXpLOM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mb3J0/dW5lLmNvbS9pbWct/YXNzZXRzL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA1L0dl/dHR5SW1hZ2VzLTEy/NDExODE2NTItZTE3/MTQ2NDQzMDIyMzcu/anBnP3c9MTQ0MCZx/PTc1",
    },
    {
      img: "https://imgs.search.brave.com/WhlV2qz5987LacKAS7NkeWfNd6wWGjUXHjxyA-FnTvY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9BcHBsZV9J/bmMuL0FwcGxlX0lu/Yy4tV2hpdGUtRGFy/ay1CYWNrZ3JvdW5k/LUxvZ28ud2luZS5z/dmc.svg",
      content:
        "Apple Inc. is an American multinational technology company that specializes in consumer electronics, software, and online services.",
      ceo: "Tim Cook",
      ceoImg:
        "https://imgs.search.brave.com/6TkCM2v9yG1U9wyzDeI14RmPnUGA_xZQYxT-WmAvaFM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS90L2VTS25v/YXh5VTVjMlB1LW9n/MFJYLVFiVGNfcz0v/NDAweDQwMC9zbWFy/dC9hcnRpY2xlLW5l/dy8yMDIzLzA1L1Rp/bS1Db29rLU1hY0Jv/b2stMTZ4OS5qcGVn",
    },
    {
      img: "https://imgs.search.brave.com/SVtHaEki3azWG7NcSm1Tot4Tx_0ce1MTBbkAL1HQ1q0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9OZXRmbGl4/L05ldGZsaXgtTG9n/by53aW5lLnN2Zw.svg",
      content:
        "Netflix, Inc. is an American subscription streaming service and production multinational technology company.",
      ceo: "Ted Sarandos",
      ceoImg:
        "https://www.indiewire.com/wp-content/uploads/2016/07/sarandos.jpg",
    },
    {
      img: "https://imgs.search.brave.com/QHdZuewSmB_Am-RM4OTd0eU1tEumawNGtuuGeQZ2WZo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Xb3JkbWFy/ay1SZWQtTG9nby53/aW5lLnN2Zw.svg",
      content:
        "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. and currently the top company in Aerospace",
      ceo: "Elon Musk",
      ceoImg:
        "https://imgs.search.brave.com/NXzA7fcH7Mn5HU2LYFMk0lphJEfyfBSwSzsnnUIKmm0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlYmxhemUuY29t/L21lZGlhLWxpYnJh/cnkvaW1hZ2UuanBn/P2lkPTUyNDY1NjMy/JndpZHRoPTEyNDUm/aGVpZ2h0PTcwMCZx/dWFsaXR5PTg1JmNv/b3JkaW5hdGVzPTAs/MCwwLDEwNw",
    },
  ];

  const nextSlide = () =>
    setCurrent((prev) => (prev === posts.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? posts.length - 1 : prev - 1));

  const getVisiblePosts = () => {
    return Array.from(
      { length: 4 },
      (_, i) => posts[(current + i) % posts.length]
    );
  };

  return (
    <div className='relative w-full flex justify-center items-center pl-10 pr-10'>
      <button
        onClick={prevSlide}
        className='absolute left-0 bg-gray-800 text-white p-2 rounded-full'
        aria-label='Previous Slide'
      >
        &#10094;
      </button>
      <div className='grid gap-10 lg:grid-cols-4'>
        {getVisiblePosts().map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <button
        onClick={nextSlide}
        className='absolute right-0 bg-gray-800 text-white p-2 rounded-full'
        aria-label='Next Slide'
      >
        &#10095;
      </button>
    </div>
  );
};

export default CardComponent;
