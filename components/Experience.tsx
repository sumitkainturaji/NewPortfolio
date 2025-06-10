import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (
    <div className="py-6 md:py-14 lg:py-16 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex justify-center items-center gap-2 ">
        My <span className="text-[#8333ea]">Work Experience</span>
      </h1>

      <div className="w-full mt-6 md:mt-8 lg:mt-12 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10">
        {workExperience.slice(0, 3).map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1rem md:1.75rem"
            className="text-white border-neutral-200 dark:border-slate-800 w-full md:w-auto rounded-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-center p-2 md:p-3 lg:p-3 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-8 sm:w-10 md:w-16 lg:w-20 h-auto object-cover"
              />
              <div className="md:ms-3 lg:ms-4">
                <h1 className="text-start text-sm md:text-base lg:text-lg ">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-1 md:mt-2 lg:mt-3  text-sm md:text-base text-neutral-300">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
