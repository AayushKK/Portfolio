
import DispalySection from "../components/DispalySection";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Tech from "../components/Tech";



const Home = () => {


  return (
    <>
      <div className='px-10'>
        <DispalySection />
        <Tech />
        <Info />
      </div>
      <Footer />
    </>


  );
};

export default Home;