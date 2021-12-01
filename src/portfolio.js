const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'Ezhil :)',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ezhilarasi T',
  role: 'MERN STACK DEVELOPER',
  description:
    'As a person of IT interset, I have learnt various technologies like ReactJS, NodeJS, Express, MongoDB and tools like Qlikview, RPA - BLueprism and Automation Anywhere.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Password Buddy',
    description:
      'It is a CRUD application game developed using MERN stack, where the hint to your password can be saved. It was developed to play a hint game with your friends.',
    stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
    sourceCode: 'https://github.com/ezhilarasicobra/Passwordbuddyreactjs',
    livePreview: 'https://password-buddy.netlify.app/',
  },
  {
    name: 'E-DAIRY Authentication',
    description:
      'This is a simple authentication App made, where the users can maintain their journal.',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
    sourceCode: 'https://github.com/ezhilarasicobra/E-DiaryReactJs',
    livePreview: 'https://e-dairy-with-authentication.netlify.app/',
  },
  {
    name: 'Online Book Keeper',
    description:
      'Using this App you can search the desired book from google books and book mark it in your account for later usage with Authentication feature ',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Advise AI',
    description:
      'I have created an Advise application with ALAN Artifical Intelligence. Where we can able to get an advise from the advise Guru',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB', 'Alan AI'],
    sourceCode: 'https://advise-app-using-ai.netlify.app/',
    livePreview: 'https://github.com/ezhilarasicobra/AdviseAppusing-ALAN',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node JS',
  'Mongo DB',
  'Material UI',
  'Git',
  'RPA - BluePrism'
,
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
