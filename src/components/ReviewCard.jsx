import React from 'react'

import { AiFillStar } from 'react-icons/ai'
const ReviewCard = ({reviewFeatures}) => {
  return (
    <>
        {reviewFeatures.map(feature => (
            <div 
            key=""
            className='grid 
            items-center 
            transition 
            duration-300 
            ease-in-out
            hover:-translate-y-2 
            '>

                <div className='w-[100%] h-[200px] overflow-hidden rounded-xl border-solid border-transparent border-[5px] hover:border-primary-color'>
                    <img src={feature.img} alt={feature.alt} className='object-cover w-full h-full'/>
                </div>
                <h5 className="text-black-color text-base pt-3 font-bold">{feature.title}</h5>

                <span className='className="text-black-color text-sm opacity-70'>
                    {feature.desc}
                </span>

                <div className='flex justify-between mt-4 items-start'>
                    <div className='flex justify-center gap-4'>
                        <div className='border-2 border-solid border-white-color h-10 w-10 overflow-hidden rounded-[50%] shadow-md'>
                            <img src={feature.reviewerImg} alt={feature.reviewerAlt} />
                        </div>

                        <div>
                            <span className='text-black-color font-semibold pb-2 text-base'>{feature.reviewerName}</span>
                             <p className='text-black-color text-sm'>{feature.extraInfo}</p>
                        </div>
                       
                    </div>
                    <div className='gap-1 flex items-center justify-center'>
                        <AiFillStar className='icon starIcon'/>
                        <blockquote className='font-semibold text-sm'>4.84</blockquote>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default ReviewCard
