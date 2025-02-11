import Sidebar from "../Components/Sidebar";
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";

export default function Home() {
  return (
    <div className="bg-black w-full min-h-screen grid grid-flow-row m-0 justify-center overflow-hidden">
      <Sidebar />
      <Hero />
      <div className="bg-black w-full mt-[10rem] grid">
        <h1 className="text-white text-[2rem] font-economica md:ml-[10rem] mb-6 justify-self-center md:justify-self-start">
          Our Top Picks
        </h1>
        <Carousel type = 'top'/>
      </div>
      <div className="bg-black w-full mt-[10rem] grid">
        <h1 className="text-white text-[2rem] font-economica md:ml-[10rem] mb-6 justify-self-center md:justify-self-start">
          This Season
        </h1>
        <Carousel type = 'this_season'/>
      </div>
    </div>
  );
}
