import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Blog from '../components/Sections/Blog';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import GIthubUnwrap from '../components/Sections/GIthubUnwrap';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';
import Publications from '../components/Sections/Publications';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <GIthubUnwrap />
      <Portfolio />
      <Blog />
      <Publications />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
