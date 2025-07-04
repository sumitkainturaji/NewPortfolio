'use client'
import { useState } from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import Lottie from 'react-lottie'
import { cn } from '@/lib/utils'
import { BackgroundGradientAnimation } from './GradientBg'
import GridGlobe from './GridGlobe'
import animationData from '@/data/confetti.json'
import MagicButton from '../Magicbutton'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-2 lg:gap-5 mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  id,
  title,
  description,

  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string
  id: number
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const techStackList = [
    'ReactJS',
    'NextJS',
    'Typescript',
    'Express',
    'NodeJS',
    'MongoDB',
    'Sql',
    'Java',
    'JavaScript',
    'Redux',
    'Zustand',
  ]

  const [copied, setCopied] = useState(false)

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const handleCopy = async () => {
    try {
      const text = 'sumitkaintura73@gmail.com'
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch (error) {
      console.error('Failed to copy text:', error)
    }
  }

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center ')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && 'w-full opacity-80'
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 '
          )}
        >
          <div className="  text-sm md:text-xs lg:text-base text-[#C1C2D3] z-10  w-full truncate whitespace-nowrap overflow-hidden">
            {description}
          </div>

          {typeof title === 'string' ? (
            <div className=" text-base lg:text-xl max-w-96 font-semibold z-10">
              {title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={index >= 5 ? 'text-[#7737b2]' : 'text-neutral-200'}
                >
                  {word + ' '}
                </span>
              ))}
            </div>
          ) : (
            <div className=" text-base lg:text-xl max-w-96 font-semibold z-10">
              {title}
            </div>
          )}

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-4 w-full justify-center flex-wrap mt-2">
              {[...techStackList].map((item, i) => (
                <span
                  key={i}
                  className=" px-2 text-xs md:text-sm lg:text-sm rounded-lg text-center bg-[#10132E] text-neutral-200 opacity-90"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          {id === 6 && (
            <div className=" relative">
              <div
                className={`absolute -bottom-5 right-0  ${
                  copied ? 'block' : 'block'
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? 'Email is Copied!' : 'Copy my email address'}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
