export type Project = {
  title: string
  des: string
  src: string
  href: string
  stack: string[]
}

export const projects: Project[] = [
  {
    title: 'Jewelry Website',
    des: 'Experience the sparkle of elegance with our stunning jewelry website, built using the MERN stack and styled beautifully with Tailwind CSS.',
    src: '/p1.png',
    href: 'https://jwellerey.onrender.com/',
    stack: [
      'React',
      'Tailwind CSS',
      'JavaScript',
      'Node Js',
      'Express Js',
      'MongoDB',
    ],
  },
  // {
  //   title: 'Dabhand Solution',
  //   des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
  //   src: '/P2.PNG',
  //   href: 'https://dabhand.onrender.com/',
  //   stack: [
  //     'React',
  //     'Tailwind CSS',
  //     'JavaScript',
  //     'Node Js',
  //     'Express Js',
  //     'MongoDB',
  //     'Razorpay',
  //   ],
  // },
  {
    title: 'Chat Application',
    des: 'Experience seamless real-time communication with our MERN-based chat app, enhanced by Socket.IO and styled using DaisyUI, Tailwind CSS.',
    src: '/p4.png',
    href: 'https://chatapp-6vdf.onrender.com/',
    stack: [
      'React',
      'JavaScript',
      'Node Js',
      'Express Js',
      'Tailwind CSS',
      'DaisyUI',
      'Socket IO',
      'MongoDB',
    ],
  },
  {
    title: 'Ecommerce Clothing Store',
    des: 'Step into style with our MERN-based ecommerce clothing store, designed with Tailwind CSS for a sleek, responsive experience.',
    src: '/P3.png',
    href: 'https://mernstackproject-frontend-jlu9.onrender.com/',
    stack: [
      'React',
      'Tailwind CSS',
      'JavaScript',
      'Node Js',
      'Express Js',
      'MongoDB',
    ],
  },
]
