import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  // SparklesIcon,
} from '@heroicons/react/24/outline';
import {TypeAnimation} from 'react-type-animation';

import BlogIcon from '../components/Icon/BlogIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import MediumIcon from '../components/Icon/MediumIcon';
import heroImage from '../images/header-background.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mohammad Raziei Homepage',
  description: 'Learn all about Mohammad Raziei and his work.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Blog: 'blog',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mohammad Raziei.`,
  description: (
    <>
      <TypeAnimation
        className="text-indigo-400 prose-sm sm:prose-base overflow-hidden"
        repeat={Infinity}
        sequence={[
          "I'm a Researcher",
          4000,
          "I'm a Data Scientist",
          2000,
          "I'm a Software Engineer",
          3000,
          "I'm Senior at Python",
          2000,
          "I'm Senior at C++",
          2000,
          'I Love Mathematics',
          2000,
          'I Love Physics',
          1000,
        ]}
        speed={50}
        style={{fontSize: '1.5em'}}
      />

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a researcher, passionate about <strong className="text-stone-100">Artificial Intelligence</strong>,{' '}
        <strong className="text-stone-100">Image Processing</strong>,{' '}
        <strong className="text-stone-100">Natural Language Processing</strong>, and{' '}
        <strong className="text-stone-100">Signal Processing</strong>. My expertise includes{' '}
        <strong>Backend Development</strong>, creating packages, implementing algorithms, and working with{' '}
        <strong className="text-stone-100">Parallelism</strong> and <strong>High-Performance Computing (HPC)</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my spare time, I immerse myself in solving Rubik's Cubes, enjoying the challenge of various sizes and
        complexities. Continuous learning and skill enhancement remain integral aspects of my life.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://github.com/MohammadRaziei/resume/releases/latest/download/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
function calculateYears(dateOfBirth: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  return (
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() - birthDate.getMonth() < 0 ||
    (today.getMonth() - birthDate.getMonth() === 0 && today.getDate() < birthDate.getDate())
      ? 1
      : 0)
  );
}

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Mohammad Raziei, passionate about Data Science,
   Image Processing, Natural Language Processing, and Signal Processing.
    With studies in Communication Systems, Computer Engineering at Polytechnic
   of Tehran, and Biomedical Engineering at Sharif University, I specialize
    in Backend Development, algorithm implementation, Parallelism, and HPC.
   Additionally, I have hands-on experience in MRI scanner image reconstruction. 
   Outside of work, I continue to expand my expertise and interests through 
   continuous learning.`,
  aboutItems: [
    {label: 'Location', text: 'Tehran, Iran', Icon: MapIcon},
    {label: 'Age', text: calculateYears('1997-03-04').toString(), Icon: CalendarIcon},
    {label: 'Nationality', text: 'Persian', Icon: FlagIcon},
    // {label: 'Interests', text: 'Artificial Intelligence, Signal Processing', Icon: SparklesIcon},
    {label: 'Study', text: 'Sharif University of Tehran', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Hamrah-e-Avval (MCI).', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Persian',
        level: 10,
      },
      {
        name: 'English',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML / CSS / Javascript / JQuery / bootstrap',
        level: 6.7,
      },
      {
        name: 'React / NextJs / Typescript / TailwindCss',
        level: 3,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python / Cython / CPython',
        level: 10,
      },
      {
        name: 'C++ / Qt ',
        level: 9,
      },
      {
        name: 'Matlab',
        level: 8,
      },
      {
        name: 'Cuda',
        level: 7,
      },
    ],
  },
  {
    name: 'Artificial Intelligence',
    skills: [
      {
        name: 'Image Processing',
        level: 5,
      },
      {
        name: 'Signal Processing',
        level: 9,
      },
      {
        name: 'Natural Language Processing (NLP)',
        level: 6,
      },
      {
        name: 'Generative AI',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'My Website',
    description: 'We will delve into the adventure of my website and the technologies used in it.',
    url: '#',
    image: require('public/static/assets/images/mohammadraziei-website.png'),
  },
  {
    title: 'MSc Thesis',
    description: 'Title: Under-sampled MRI image reconstruction',
    url: 'https://mohammadraziei.github.io/blog/blog/projects/msc-thesis',
    image: require('public/static/assets/downloaded/msc-thesis.jpg'),
  },
  // {
  //   title: 'liburlparser package',
  //   description: 'liburlparser is a high-performance domain extractor library designed for parsing URLs in C++',
  //   url: 'https://mohammadraziei.github.io/blog/blog/projects/liburlparser',
  //   image: require('public/static/assets/images/liburlparser-logo.png'),
  // },
  {
    title: 'BSc Thesis',
    description: 'Title: Reinforcement Learning based algorithms to control autonomous driving car',
    url: 'https://mohammadraziei.github.io/blog/blog/projects/bsc-thesis',
    image: require('public/static/assets/images/autonomous-car.jpg'),
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2019 -- 2022',
    location: 'Sharif University of Technology - Tehran, Iran',
    title: 'M.Sc. in Biomedical Engineering - Electrical Engineering Department',
    content: (
      <>
        <em style={{textAlign: 'left'}}>Thesis Title: Undersampled MRI Image Reconstruction</em>
        <p>
          This dissertation was successfully defended in early 2022 with a very good grade. Subsequently, it was
          selected by the university as a confidential project for up to 5 years to complete the work related to the
          article and its patent registration.
        </p>
      </>
    ),
  },
  {
    date: '2017 -- 2020',
    location: 'Amirkabir University of Technology - Tehran, Iran',
    title: 'B.Sc. in Software Engineering - Computer Engineering Department',
    content: (
      <p>
        Due to having excellent conditions resulting from my undergraduate GPA and ranking in the national university
        entrance exam (461), I pursued further studies in the field of computer science in addition to electrical
        engineering, through the University's Elite Talents Foundation.
      </p>
    ),
  },
  {
    date: '2015 -- 2019',
    location: 'Amirkabir University of Technology - Tehran, Iran',
    title: 'B.Sc. in Communication Systems - Electrical Engineering Department',
    content: (
      <>
        <em style={{textAlign: 'left'}}>
          Thesis Title: Reinforcement Learning based Algorithm to Control Autonomous vehicles
        </em>
        <p>
          This dissertation achieved the top rank in the industry at the end of 2019. This event was held with the
          evaluation of a panel of electrical professors and industry judges.
        </p>
      </>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2018 - Present',
    location: 'Hamrah Avval Company (MCINEXT) - Tehran, Iran',
    title: 'Senior Python and C++ developer',
    content: (
      <p>
        The company's main goal is to achieve the digital dream and implement an internal search engine. Our team, named
        document analysis, is responsible for analyzing pages, extracting features, analyzing site SEO, rendering
        JavaScript pages, and estimating page quality.
      </p>
    ),
  },
  {
    date: 'May 2018 -- Nov 2020',
    location: 'SSIG Company - Tehran, Iran',
    title: 'Member of Signal Processing & Software Department',
    content: (
      <p>
        In this company, I interviewed for the software team but ended up working in the signal processing team. After a
        month, I worked as a member of both teams. The software team consisted of 12 members, and the communication
        signal processing team consisted of 8 members. Initially, in the signal processing team, we analyzed the
        mentioned signals and implemented various algorithms in MATLAB. Then, as a MATLAB translator to C++, I
        implemented these algorithms in the signal processing software, which was written in Qt.
      </p>
    ),
  },
  {
    date: 'Jan 2021 -- Nov 2020',
    location: 'Sunyar Company - Pardis, Iran',
    title: 'Lead of AI and Software Engineering',
    content: (
      <p>
        This company, located in Pardis Technology Park, works in the field of telecommunications and software. In this
        team, I was the team lead of the programming group. The company's projects were in the telecommunications and
        software domains, including projects in artificial intelligence, which involved five members. The projects
        included tasks such as Automatic Modulation Recognition (AMR) and monitoring. Additionally, projects in
        High-Performance Computing were carried out using CUDA for parallelization.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mohammad Raziei',
      text: 'If you want to shorten a line, always draw a longer line next to it.',
      image: '/static/assets/downloaded/gravatar.png',
    },
    {
      // https://dehkhodaedu.com/%D8%AC%D9%85%D9%84%D8%A7%D8%AA-%D9%82%D8%B5%D8%A7%D8%B1-%D8%A8%D8%B2%D8%B1%DA%AF%D8%A7%D9%86-%D8%A8%D9%87-%D8%B2%D8%A8%D8%A7%D9%86-%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C-%D8%A8%D8%A7-%D8%AA%D8%B1/
      name: 'Nelson Mandela',
      text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      image: '/static/assets/images/nelson-mandela.jpg',
    },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'mohammadraziei1375@gmail.com',
      href: 'mailto:mohammadraziei1375@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Tehran, Iran',
      href: 'https://www.google.ca/maps/place/Tehran,+Tehran+Province,+Iran/@35.7077402,51.1828469,11z/',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'mohammadraziei',
      href: 'https://github.com/mohammadraziei',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mohammadraziei'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mohammad-raziei-595515134/'},
  {label: 'Medium', Icon: MediumIcon, href: 'https://www.medium.com/@mohammad.raziei/'},
  {label: 'Blog', Icon: BlogIcon, href: 'https://mohammadraziei.github.io/blog'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
