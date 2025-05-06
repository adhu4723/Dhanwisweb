import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CareerAccordion() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [openIndex, setOpenIndex] = useState(null);

    const careerData = [
        {
            title: "Graphic Designer",
            description: [
                "Create visual concepts to communicate ideas.",
                "Use tools like Photoshop, Illustrator, Figma.",
                "Collaborate with marketing and branding teams.",
                "Design social media posts, brochures, and banners."
            ]
        },
        {
            title: "Python Developer",
            description: [
                "Develop backend services using Python and Django/Flask.",
                "Work with databases like PostgreSQL or MongoDB.",
                "Write efficient, scalable, and clean code.",
                "Collaborate with frontend and DevOps teams."
            ]
        },
        {
            title: "React Developer",
            description: [
                "Build responsive web apps using React.js.",
                "Implement reusable components and hooks.",
                "Integrate REST APIs and manage state with Redux.",
                "Optimize performance and ensure mobile responsiveness."
            ]
        },
        {
            title: "Digital Marketing",
            description: [
                "Develop and manage digital marketing campaigns.",
                "Optimize content for SEO and SEM.",
                "Analyze performance using Google Analytics and Ads.",
                "Work across social media, email, and content platforms."
            ]
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='w-full  mx-auto my-10 px-4'>
            {careerData.map((item, index) => (
                <div
                    key={index}
                    className='border-b border-gray-300'
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className='w-full text-left flex justify-between items-center py-4 text-xl lg:text-3xl font-semibold text-orange-600 focus:outline-none'
                    >
                        {item.title}
                        <span>{openIndex === index ? '−' : '+'}</span>
                    </button>
                    {openIndex === index && (
                        <div className='pb-4 pl-4 text-gray-700'>
                            <ul className='list-disc pl-5 mb-4'>
                                {item.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <button className='bg-orange-600 px-4 py-2 text-white font-semibold rounded hover:bg-orange-700 transition duration-300'>
                                APPLY NOW
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default CareerAccordion;
