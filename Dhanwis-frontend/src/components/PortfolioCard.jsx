import React from 'react'
import cinemaagency from '../assets/images/portfolio/cinemaagency.png'
import ExoraConventions from '../assets/images/portfolio/ExoraConventions.png'
import { Link } from 'react-router-dom'

function PortfolioCard() {

    const portfolioData = [
        {
            title:"Cinema News Agency",
            img: cinemaagency,
            dis: "Cinema News Agency is an online platform dedicated to providing news, updates, and information related to the film and entertainment industry."
        },
        {
            title:"Exora Conventions",
            img: ExoraConventions,
            dis: "Exora Conventions-an extra ordinary convention centre in Kannur is a new entrant in Kannur ' s social arena."
        },{
            title:"Cinema News Agency",
            img: cinemaagency,
            dis: "Cinema News Agency is an online platform dedicated to providing news, updates, and information related to the film and entertainment industry."
        },{
            title:"Exora Conventions",
            img: ExoraConventions,
            dis: "Exora Conventions-an extra ordinary convention centre in Kannur is a new entrant in Kannur ' s social arena."
        }
    ]
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            {portfolioData.map(items => (
                <div className='w-full'>
                    <img src={items.img} alt="" />
                    <div className='flex lg:flex-nowrap flex-wrap items-end gap-5'>
                        <div>
                    <h1 className='text- lg:text-lg  font-bold'>{items.title}</h1>
                    <p className="line-clamp-3 text-sm">{items.dis}</p>
                    </div>
                    <div className='bg-orange-600 text-white rounded-full px-4 py-3 w-fit text-2xl'>
                    <i class="bi bi-arrow-up-right"></i>                    </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default PortfolioCard
