import { Header } from 'components/HomePage/Header/Header';
import { Hero } from 'components/HomePage/Hero/Hero';
import { Contacts } from 'components/HomePage/Contacts/Contacts';
import { Services } from 'components/HomePage/Services/Services';
import { Gallery } from 'components/HomePage/Gallery/Gallery';
import { Reserve } from 'components/HomePage/Reserve/Reserve';
import { About } from 'components/HomePage/About/About';
import { Footer } from 'components/HomePage/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reserve />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
