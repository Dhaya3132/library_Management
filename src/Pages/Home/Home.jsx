import Categories from "../../Components/Categories";
import hero_image from '../../assets/hero_image.jpg';
const Home = () => {
    return (
        <div>
            <section id="hero_Section" className="flex md:flex-row flex-col justify-center items-center gap-10 md:p-10 p-5">
                <div className="w-1/2">
                    <h2 className="text-5xl font-semibold font-Poppins mb-2">The Ultimate Library Management Tool</h2>
                    <p className="text-xl font-light text-gray-400">Organize your shelves and keep track of every book with ShelfMaster. Designed for ease of use, it's the perfect solution for maintaining a well-ordered library</p>
                </div>
                <img src={hero_image} alt="hero_image" className='w-96 h-auto' />
            </section>
            <Categories />
        </div>
    )
}
export default Home;