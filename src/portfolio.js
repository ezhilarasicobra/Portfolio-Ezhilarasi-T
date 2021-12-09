import pic1 from '../src/components/images/pumkintales.PNG'
import pic2 from '../src/components/images/onlinesource.PNG'
import pic3 from '../src/components/images/doctor.PNG'
import pic4 from '../src/components/images/book.PNG'
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ezhilarasi-t-portfolio.netlify.app/',
  title: 'Ezhil :)',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ezhilarasi T',
  role: 'MERN STACK DEVELOPER',

  description:
    'As a person of IT interset, I have learnt various technologies like ReactJS, NodeJS, Express, MongoDB and tools like Qlikview, RPA - BLueprism and Automation Anywhere.',
  resume: 'https://drive.google.com/file/d/1ANu5ta_ZyyQ-Wc1KJYiruwajHpnQFJSZ/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Pumpkin Tales ',
    description:
      'It is a food ordering Application. This can be used by customers and the restaurant to facilitate their food ordering process. ',
    stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
    sourceCodeReact: 'https://github.com/ezhilarasicobra/PumpkinTalesReact',
    pic:pic1,
    sourceCodeNode: 'https://github.com/ezhilarasicobra/foodAppNode',
    livePreview: 'https://pumpkintales.netlify.app/',
  },
  {
    name: 'Online Source Saver',
    description:
      'This is a simple List Appliaction to save the online source, which can be added to your bucket  list and to prioritize the work to be finished ',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
      sourceCodeReact: 'https://github.com/ezhilarasicobra/ListApplicationReact',
      pic:pic2,
      sourceCodeNode: 'https://github.com/ezhilarasicobra/ListApplicationNodejs',
    livePreview: 'https://online-source-saver.netlify.app/',
  },
  {
    name: 'MEdii  +',
    description:
      'This Application is used to book appointments with doctors and vice versa. Users can book/cancel their appointments online easily',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
      sourceCodeReact: 'https://github.com/ezhilarasicobra/DoctorBookingReact',
      pic:pic3,
      sourceCodeNode: 'https://github.com/ezhilarasicobra/DoctorBookingNode',
    livePreview: 'https://doctor-appointment-app.netlify.app/',
  },
  {
    name: 'E -BookMark',
    description:
      'You can have a list of books to be added in your wishlist of your application',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB', 'Alan AI'],
      sourceCodeReact: 'https://github.com/ezhilarasicobra/reactbook',
      pic:pic4,
      sourceCodeNode: 'https://github.com/ezhilarasicobra/boolistnode',
      livePreview: 'https://gbooksclone.netlify.app/',
  }
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
