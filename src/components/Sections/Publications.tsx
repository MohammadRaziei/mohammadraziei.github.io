import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Publications: FC = memo(() => {
  const publications = [
    {
      image: '/static/assets/images/publications/books/reinforcement-learning-book.jpg',
      title: 'Reinforcement Learning Applications In the Controlling of Autonomous Vehicles',
      description: (
        <>
          "Reinforcement Learning Applications in the Controlling of Autonomous Vehicles" is a comprehensive guide that
          explores the implementation of reinforcement learning algorithms in self-driving cars, covering fundamental
          concepts, challenges, and successful case studies. It is an essential resource for researchers, engineers, and
          enthusiasts in the field.
        </>
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
              <img alt="Book Cover" className="object-contain w-full" src={publication.image} />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xl text-gray-100 font-bold mb-2">{publication.title}</h2>
              <p className="text-gray-400 text-justify">{publication.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
});

Publications.displayName = 'Publications';

export default Publications;
