import React from 'react'
import PortfolioCard from './PortfolioCard'
import { Link } from 'react-router-dom'

function OurWorks() {
  return (
    <div className='space-y-10'>
       <div className='text-center  '>
                    <p className='uppercase text-sm tracking-widest text-gray-900 mb-2'>Our Works</p>
                    <h1 className='text-2xl lg:text-4xl font-bold  '>Our Past  <span className='text-orange-600 uppercase  cursive-font'>Web Design</span> </h1>
                </div>
                <div>
                    <PortfolioCard/>
                </div>
                <div className='text-center'>
                <Link className='bg-orange-600 text-white px-4 py-2 rounded-lg' to={'/ourworks'}>SEE ALL</Link>
            </div>
    </div>
  )
}

export default OurWorks
