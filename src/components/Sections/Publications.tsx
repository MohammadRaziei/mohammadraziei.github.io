import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Publications: FC = memo(() => {
  const publications = [
    {
      type: 'book',
      label: 'Published',
      image: '/static/assets/images/publications/books/reinforcement-learning-book.jpg',
      title: 'Reinforcement Learning Applications In the Controlling of Autonomous Vehicles',
      date: '2021',
      description: (
        <div>
          "Reinforcement Learning Applications in the Controlling of Autonomous Vehicles" is a comprehensive guide that
          explores the implementation of reinforcement learning algorithms in self-driving cars, covering fundamental
          concepts, challenges, and successful case studies. It is an essential resource for researchers, engineers, and
          enthusiasts in the field.
          <a
            className="text-gray-300 hover:text-gray-50"
            href="https://www.gisoom.com/book/11789535/%DA%A9%D8%AA%D8%A7%D8%A8-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF-%DB%8C%D8%A7%D8%AF%DA%AF%DB%8C%D8%B1%DB%8C-%D8%AA%D9%82%D9%88%DB%8C%D8%AA%DB%8C-%D8%AF%D8%B1-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D8%A7%D8%AA%D9%88%D9%85%D8%A8%DB%8C%D9%84-%D9%87%D8%A7%DB%8C-%D8%AE%D9%88%D8%AF%D8%B1%D8%A7%D9%86/"
            target="_blank">
            Read more.
          </a>
        </div>
      ),
    },
    {
      type: 'book',
      label: 'In Progress: 50%',
      image: '/static/assets/images/publications/books/GSPbook2.png',
      title: 'Graph Signal Processing book: Theory + Matlab simulations (GSPBOX)',
      date: '2024',
      description: (
        <div>
          Explore the fundamentals of Graph Signal Processing in this groundbreaking Persian-language book co-authored
          by <strong>Dr. Arash Amini</strong>. Delve into the mathematical intricacies of signal processing on graphs,
          paving the way for a deeper understanding of this emerging field. A comprehensive guide for students and
          researchers looking to grasp the core concepts of GSP in their native language.
        </div>
      ),
    },
    {
      type: 'book',
      label: 'In Progress: 95%',
      image: '/static/assets/images/publications/books/matlab-python-simulink.png',
      title: 'Connection between Matlab, Python and Simulink. Powered by Matlab-Engine',
      date: '2024',
      description: (
        <div>
          Establish seamless integration between MATLAB, Python, and Simulink through the powerful MATLAB Engine.
          Leverage the versatility of Python for data manipulation and visualization, while harnessing MATLAB’s
          computational capabilities. Bridge the gap between simulation and implementation by utilizing Simulink for
          model-based design, creating a unified workflow across these platforms.
        </div>
      ),
    },
    {
      type: 'article',
      label: 'In Progress: 98%',
      image: '/static/assets/images/publications/books/scanArticle.png',
      title:
        'Efficient Sequential Addressed Calculating Tree (ESACT): a Bank-Conflict-Free Technique for Parallel Prefix-Sum (Scan)',
      date: '2024',
      description: (
        <div>
          The paper introduces ESACT, a novel algorithm for parallel prefix sum calculations, addressing bank conflict
          issues without shared memory padding. ESACT employs a “calculating tree” concept, transforming the Blelloch
          algorithm into a sequential addressing scheme with pre-reordered indices. It achieves a remarkable 27%
          increase in calculation speed, marking a significant advancement in parallel computing by overcoming previous
          limitations.
        </div>
      ),
    },
    // Add more publications as needed
  ];

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Publications}>
      <div className="flex flex-col">
        <h2 className="self-center text-xl font-bold text-white mb-4">My Publications</h2>
        {publications.map(publication => (
          <div className="flex flex-col sm:flex-row shadow-lg rounded-lg p-6 mb-4">
            <div className="w-80 max-w-9/12 sm:w-3/12 mr-6 mb-4 sm:mb-0 flex-shrink-0 content-center">
              <a href={publication.image} target="_blank">
                <img alt="Book Cover" className="object-contain w-full" src={publication.image} />
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <span className="bg-neutral-700 text-neutral-400 rounded-xl px-3 py-1">{publication.label}</span>
                <h2 className="text-xl text-gray-100 font-bold mb-2">{publication.title}</h2>
              </div>
              <span className="text-neutral-400">{publication.date}</span>
              <div className="text-gray-400 text-justify">{publication.description}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
});

Publications.displayName = 'Publications';

export default Publications;
