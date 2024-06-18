import React from "react";
import styles from "./Hero.module.css";

const companies = [
  {
    img: "https://imgs.search.brave.com/zaciroqLKCK1NBVm1uaMyYpY88j1HuEafwm1fOtlr60/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NaWNyb3Nv/ZnQvTWljcm9zb2Z0/LUxvZ28ud2luZS5z/dmc.svg",
    ceo: "Satya Nadella",
    ceoImg:
      "https://cdn.britannica.com/11/181311-050-A509D24F/Satya-Nadella-Microsoft.jpg?w=385",
  },
  {
    img: "https://imgs.search.brave.com/QMTmKqxACx6h7vk_i0v4YseDYcz7Q6lwm5ovzxdf36E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Hb29nbGUv/R29vZ2xlLUxvZ28u/d2luZS5zdmc.svg",
    ceo: "Sundar Pichai",
    ceoImg:
      "https://cdn.britannica.com/42/193142-050-F69B1A23/Sundar-Pichai-Google.jpg",
  },
  {
    img: "https://imgs.search.brave.com/YyeHuD3Sivh7ukU0FAVsgFVuJm7XZqP9yue2X2noYcc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NZXRhX1Bs/YXRmb3Jtcy9NZXRh/X1BsYXRmb3Jtcy1M/b2dvLndpbmUuc3Zn.svg",
    ceo: "Mark Zuckerberg",
    ceoImg:
      "https://imgs.search.brave.com/5wmYHgTChfjX-hVhtiJg0wX73MRAS0WZSktcHEHLlAU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzY2/MzRjYWFiZWMwYzY5/NjU2OTAwOWYyYz93/aWR0aD03MDA",
  },
  {
    img: "https://imgs.search.brave.com/0inKegGKJVeGDi5U6E1BuREDZUjnEIVYK537lE6RUVc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9BbWF6b25f/KGNvbXBhbnkpL0Ft/YXpvbl8oY29tcGFu/eSktTG9nby53aW5l/LnN2Zw.svg",
    ceo: "Andy Jassy",
    ceoImg:
      "https://imgs.search.brave.com/xvyZ54EWdPtEhf58o49aeBARiJHfOCV8whPgFIXpLOM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mb3J0/dW5lLmNvbS9pbWct/YXNzZXRzL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA1L0dl/dHR5SW1hZ2VzLTEy/NDExODE2NTItZTE3/MTQ2NDQzMDIyMzcu/anBnP3c9MTQ0MCZx/PTc1",
  },
  {
    img: "https://imgs.search.brave.com/WhlV2qz5987LacKAS7NkeWfNd6wWGjUXHjxyA-FnTvY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9BcHBsZV9J/bmMuL0FwcGxlX0lu/Yy4tV2hpdGUtRGFy/ay1CYWNrZ3JvdW5k/LUxvZ28ud2luZS5z/dmc.svg",
    ceo: "Tim Cook",
    ceoImg:
      "https://imgs.search.brave.com/6TkCM2v9yG1U9wyzDeI14RmPnUGA_xZQYxT-WmAvaFM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS90L2VTS25v/YXh5VTVjMlB1LW9n/MFJYLVFiVGNfcz0v/NDAweDQwMC9zbWFy/dC9hcnRpY2xlLW5l/dy8yMDIzLzA1L1Rp/bS1Db29rLU1hY0Jv/b2stMTZ4OS5qcGVn",
  },
  {
    img: "https://imgs.search.brave.com/SVtHaEki3azWG7NcSm1Tot4Tx_0ce1MTBbkAL1HQ1q0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9OZXRmbGl4/L05ldGZsaXgtTG9n/by53aW5lLnN2Zw.svg",
    ceo: "Ted Sarandos",
    ceoImg: "https://www.indiewire.com/wp-content/uploads/2016/07/sarandos.jpg",
  },
  {
    img: "https://imgs.search.brave.com/QHdZuewSmB_Am-RM4OTd0eU1tEumawNGtuuGeQZ2WZo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Xb3JkbWFy/ay1SZWQtTG9nby53/aW5lLnN2Zw.svg",
    ceo: "Elon Musk",
    ceoImg:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
  },
];

const ProfileCard = ({ img, ceo, ceoImg }) => (
  <div className='flex-none w-1/4 p-4'>
    <div className='mb-4'>
      <img
        src={ceoImg}
        alt={ceo}
        className='w-32 h-32 object-cover rounded-full mx-auto'
      />
    </div>
    <h4 className='text-center text-lg font-semibold text-black'>{ceo}</h4>
    <div className='mt-4'>
      <img
        src={img}
        alt='company logo'
        className='w-24 h-12 object-contain mx-auto'
      />
    </div>
  </div>
);

const Founder = () => {
  return (
    <div className='flex overflow-x-auto p-4 space-x-4 hide-scrollbar'>
      <div className='pl-4'></div>
      {companies.map((company, index) => (
        <ProfileCard
          key={index}
          img={company.img}
          ceo={company.ceo}
          ceoImg={company.ceoImg}
        />
      ))}
      <div className='pr-4'></div>
    </div>
  );
};

export default Founder;
