import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Contacts } from 'components/Contacts/Contacts';
import { Services } from 'components/Services/Services';
import { Gallery } from 'components/Gallery/Gallery';
import { Reserve } from 'components/Reserve/Reserve';
import { About } from 'components/About/About';
import { Footer } from 'components/Footer/Footer';

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
