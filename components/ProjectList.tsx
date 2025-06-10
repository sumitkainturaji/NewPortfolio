'use client'

import { projects } from '@/constants/project'
import { ProjectCard } from '@/components/Project'

const ProjectsList = () => {
  return (
    <div className="mx-auto  px-2 py-8 sm:px-6 lg:px-1 lg:mt-20" id="projects">
      <h1 className="md:text-3xl flex justify-center items-center  gap-1  sm:text-2xl lg:text-4xl">
        A small selection of{'  '}
        <span className="text-[#8333ea]">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-20 md:mt-18 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsList
