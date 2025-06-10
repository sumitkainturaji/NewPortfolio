import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { getLogoForTechnology } from '../logo-mapper'

export const StackItems = ({
  technology,
  className,
}: {
  technology: string
  className?: string
}) => {
  return (
    <motion.div
      layout
      whileHover="animate"
      whileTap="animate"
      initial="initial"
      className={cn(
        'flex items-start justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500',
        className
      )}
    >
      <motion.span
        variants={{
          animate: { paddingRight: 2 },
        }}
        transition={{ type: 'spring' }}
        className="flex flex-wrap gap-2 text-neutral-500 text-xs  justify-center items-center"
      >
        {getLogoForTechnology(technology)}
      </motion.span>
      <motion.span
        variants={{
          initial: { width: 0 },
          animate: { width: 'auto' },
          exit: { width: 0 },
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
        className="flex overflow-hidden whitespace-nowrap text-neutral-200 text-center justify-center items-center "
      >
        {technology}
      </motion.span>
    </motion.div>
  )
}
