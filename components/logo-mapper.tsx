import React from 'react'
import {
  DaisyLogo,
  ExpressLogo,
  MongoLogo,
  RazorpayLogo,
  ReactLogo,
  TailwindLogo,
  ClouinaryLogo,
  JavascriptLogo,
  NodeLogo,
  SocketLogo,
} from '@/icons/stack'
import { IconCode } from '@tabler/icons-react'

export const getLogoForTechnology = (technology: string) => {
  const logoMap: Record<string, React.ReactNode> = {
    React: <ReactLogo className="h-6 w-6 shrink-0 text-neutral-200" />,
    'Tailwind CSS': (
      <TailwindLogo className="h-6 w-6 shrink-0 text-neutral-200" />
    ),
    DaisyUI: <DaisyLogo className="h-6 w-6 shrink-0 text-neutral-200" />,
    'Express Js': <ExpressLogo className="h-6 w-6 shrink-0 text-neutral-200" />,
    'Node Js': <NodeLogo className="h-6 w-6 shrink-0 text-neutral-200" />,
    MongoDB: <MongoLogo className="h-6 w-6 shrink-0 text-neutral-200" />,
    Razorpay: <RazorpayLogo className="h-6 w-6 shrink-0 text-neutral-200" />,
    Cloudinary: <ClouinaryLogo className="h-6 w-6 shrink-0 text-neutral-200" />,
    JavaScript: (
      <JavascriptLogo className="h-6 w-6 shrink-0 text-neutral-200" />
    ),
    'Socket IO': <SocketLogo className="h-6 w-6 shrink-0 text-neutral-200" />,
  }
  return (
    logoMap[technology] || (
      <IconCode className="h-6 w-6 shrink-0 text-neutral-200" />
    )
  )
}
