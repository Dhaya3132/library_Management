import Categories from "../../Components/Categories";
import Booksdata from "../../Components/Booksdata";
import hero_image from '../../assets/hero_images.png';
import Footer from '../../Components/Footer';

const Home = () => {
    return (
        <div>
            <section id="hero_Section" className="bg-bgBanner flex md:flex-row flex-col md:justify-center justify-start items-start md:items-center w-full p-5 gap-10">
                <div className="w-1/2">
                    <h2 className="md:text-5xl text-4xl font-semibold font-Poppins mb-2">The Ultimate Library Management Tool</h2>
                </div>
                <img src={hero_image} alt="hero_image" className='w-96 h-auto' />
            </section>
            <Categories />
            <Booksdata />
            <Footer />
        </div>
    )}
export default Home;