'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'motion/react'
import { cn } from '@/lib/utils'

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')

  useEffect(() => {
    // Prevent running animation logic on the server
    if (typeof window === 'undefined') return

    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ?? 1,
        delay: stagger(0.2),
      }
    )
  }, [animate, duration, filter])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                idx > 3
                  ? 'text-[var(--text-purple)]'
                  : 'dark:text-white text-black'
              } opacity-0`}
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('', className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide sm:text-4xl lg:text-6xl text-2xl">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
