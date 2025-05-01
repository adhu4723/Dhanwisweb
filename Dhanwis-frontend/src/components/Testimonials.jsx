import React from 'react';
import AshrayaMedicals from '../assets/clients/AshrayaMedicals.png';
import auricle from '../assets/clients/auricle.png';
import leal from '../assets/clients/leal.png';
import falconcruise from '../assets/clients/falconcruise.png';
import easygo from '../assets/clients/easygo.png';
import savoy from '../assets/clients/savoy.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { icon: 'bi-emoji-smile', value: 232, label: 'Happy Clients' },
  { icon: 'bi-journal-richtext', value: 521, label: 'Projects' },
  { icon: 'bi-headset', value: 1463, label: 'Hours Of Support' },
  { icon: 'bi-people', value: 15, label: 'Hard Workers' },
];

const logos = [
  AshrayaMedicals,
  easygo,
  auricle,
  leal,
  falconcruise,
  savoy,
  'https://kannurmirror.com/wp-content/uploads/2022/08/Kannur-Mirrir-HQ-Logo.png',
];

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="text-black px-4 py-10 bg-gray-100">
      <div className="text-center">
        <p className="uppercase text-sm tracking-widest text-gray-900">Testimonials</p>
        <h2 className="text-3xl uppercase md:text-4xl font-bold text-black">
          Our <span className="text-orange-600 cursive-font">Happy Clients</span>
        </h2>
      </div>

      <div ref={ref} className="flex flex-wrap justify-center gap-6 py-10 p-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white w-full lg:w-60 p-6 rounded-lg shadow-md text-center flex flex-col items-center transform transition-all duration-700 ease-in-out
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <i className={`bi ${stat.icon} text-orange-500 text-4xl mb-4`}></i>
            <h2 className="text-3xl font-bold text-gray-800">
              {inView ? <CountUp end={stat.value} duration={2} /> : '0'}
            </h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden whitespace-nowrap py-2 ">
        <div className="marquee-track flex items-center gap-10 whitespace-nowrap animate-marquee">
          {logos.concat(logos).map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              width={250}
              alt="logo"
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
