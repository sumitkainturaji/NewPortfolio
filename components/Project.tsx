'use client'

import { LayoutGroup, motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Project as ProjectType,
  projects as defaultProjects,
} from '@/constants/project'
import { StackItems } from './ui/Stack-items'

export const ProjectCard = ({
  project = defaultProjects[0],
}: {
  project?: ProjectType
}) => {
  return (
    <div className="mx-auto mt-2 flex h-full items-center px-2 py-0.5 ">
      <motion.div
        key={project.title}
        initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="group relative mb-4 w-full rounded-2xl border border-transparent transition-all duration-300 hover:border-neutral-600 hover:shadow-5xl "
      >
        <Link href={project.href} target="_blank">
          <Image
            src={project.src}
            alt={project.title}
            height={300}
            width={300}
            className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
          />
        </Link>
        <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
          <div>
            <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-100">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-300">{project.des}</p>
          </div>
          <div className="flex max-w-[14rem] flex-wrap gap-1 ">
            <LayoutGroup>
              {project.stack.map((stack) => (
                <StackItems
                  key={stack}
                  technology={stack}
                  className="-mr-3 hover:z-10  border-2 border-neutral-800 cursor-pointer text-center justify-center items-center bg-neutral-900 mb-4 mt-4 "
                />
              ))}
            </LayoutGroup>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
