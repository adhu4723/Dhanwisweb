import React from 'react';
import { useInView } from 'react-intersection-observer';

function Services() {
    const data = [
        {
            title: 'Graphic Design',
            description: 'Our company provides professional graphic design services that help you establish a strong brand identity and communicate your message visually. We create compelling designs that captivate your audience, enhance brand recognition, and support your marketing goals across all platforms.'
        },
        {
            title: 'Digital Marketing',
            description: 'Our company offers digital marketing services that can help you expand your business and reach a global audience in a cost-effective manner. Our team specializes in converting potential leads into loyal customers, ensuring a high return on investment for your marketing efforts.'
        },
        {
            title: 'Web Design & Development',
            description: 'We specialize in creating unique and impactful websites that incorporate cutting-edge design techniques. Our websites are crafted with the finest elements that help businesses establish a strong online presence and enhance their brand identity in the digital world.'
        },
        {
            title: 'ERP Development',
            description: 'We specialize in creating unique and impactful websites that incorporate cutting-edge design techniques. Our websites are crafted with the finest elements that help businesses establish a strong online presence and enhance their brand identity in the digital world.'
        },
        {
            title: 'Search Engine Optimisation',
            description: "Boost your business ' s online presence and increase your search engine visibility. We'll assist you in optimizing your website's content to improve your organic keyword ranking and drive more traffic to your site"
        },
        {
            title: 'Mobile App Development',
            description: "Our team specializes in creating mobile apps that seamlessly work across various mobile devices and online platforms. We offer end-to-end solutions, from designing and integrating the app to managing its entire lifecycle"
        }
    ];

  return (
    <div className="mt-20">
      <div className="text-center mb-4">
        <p className="uppercase text-sm tracking-widest text-gray-900">SERVICE</p>
        <h1 className="text-2xl lg:text-4xl font-bold uppercase cursive-font">
          Our Vision & <span className="text-orange-600">Our Goal</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });

          return (
            <div
              ref={ref}
              key={index}
              className={`bg-white rounded-xl p-6 shadow-2xl w-full lg:w-96 mb-4 mx-2 transform transition-all duration-700 ease-in-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="text-3xl mb-4">📈</div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
                Learn More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
