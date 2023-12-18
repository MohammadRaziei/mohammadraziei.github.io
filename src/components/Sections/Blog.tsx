import Link from 'next/link';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import ReactLogo from '../../images/logo.svg';
import Section from '../Layout/Section';

const Blog: FC = memo(() => {
  return (
    <Section sectionId={SectionId.Blog}>
      <div className="flex flex-col items-center text-center text-neutral-300">
        <Link href="https://mohammadraziei.github.io/blog">
          <ReactLogo className="h-32 m-8 mb-12" />
        </Link>
        <h1 className="text-4xl font-bold justify-center">Visit my weblog to know more about me </h1>
        <div className="flex justify-center">
          <Link
            className="text-xl font-bold m-4 hover:text-gray-400"
            href="https://mohammadraziei.github.io/blog/blog"
            target="_blank">
            Blog
          </Link>
          <Link
            className="text-xl font-bold m-4 hover:text-gray-400"
            href="https://mohammadraziei.github.io/blog/projects"
            target="_blank">
            Projects
          </Link>
        </div>
      </div>
    </Section>
  );
});

Blog.displayName = 'Blog';

export default Blog;
