import React, { useEffect } from 'react';
import cinemaagency from '../assets/images/portfolio/cinemaagency.png';
import ExoraConventions from '../assets/images/portfolio/ExoraConventions.png';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Subcomponent inside the same file
function PortfolioItem({ item ,index}) {
   useEffect(() => {
          AOS.init({ duration: 1000 });
      }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className={`w-full transition-all duration-500 shadow-lg`}
    >
      <img src={item.img} alt={item.title} />
      <div className='flex lg:flex-nowrap flex-wrap justify-between items-end gap-5 p-4'>
        <div>
          <h1 className='text-lg font-bold'>{item.title}</h1>
          {/* <p className='line-clamp-3 text-sm'>{item.dis}</p> */}
        </div>
        <div className='bg-orange-600 hover:bg-white hover:border hover:border-orange-600 hover:text-orange-600 text-white rounded-full px-2 py-1 w-fit text-2xl'>
          <i className="bi bi-arrow-up-right"></i>
        </div>
      </div>
    </div>
  );
}

function PortfolioCard() {
  const portfolioData = [
    {
      title: 'Cinema News Agency',
      img: cinemaagency,
      dis: 'Cinema News Agency is an online platform dedicated to providing news, updates, and information related to the film and entertainment industry.',
    },
    {
      title: 'Exora Conventions',
      img: ExoraConventions,
      dis: "Exora Conventions—an extraordinary convention centre in Kannur—is a new entrant in Kannur's social arena.",
    },
  

    
  ];

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
      {portfolioData.map((item, index) => (
        <PortfolioItem key={index} item={item} />
      ))}
    </div>
  );
}

export default PortfolioCard;
