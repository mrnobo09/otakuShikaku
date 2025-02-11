import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import star from '../Assets/Images/star.png'

export default function Carousel(props) {
  const [anime, setAnime] = useState([]);
  const carouselRef = useRef(null);
  
  useEffect(() => {
    const fetchData = async () => {
      let config = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      };
      try {
        const response = await axios.get(`http://127.0.0.1:5000/${props.type}`, config);
        setAnime(response.data);
        console.log(anime);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -1500,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 1500,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative grid justify-center">
      <motion.div
        className="w-screen h-[32rem] m-0 p-0 grid bg-black overflow-y-hidden overflow-x-auto scrollbar-none"
        ref={carouselRef}
      >
        <motion.button
          onClick={scrollLeft}
          className="absolute justify-self-start z-50 self-center bg-gradient-to-r from-[#000000] via-[#000000] to-[#00000000] text-white w-[10rem] h-[33rem] text-[2rem] hidden md:block"
        >
          &lt;
        </motion.button>
        <motion.div className="grid grid-flow-col overflow-clip items-center justify-self-center h-[100%] md:pl-[5rem] md:pr-[5rem] pl-2 pr-2">
          {anime && anime.length === 0 ? (
            <p>Loading...</p>
          ) : (
            anime.map((item) => (
              <div class="group h-full w-[20rem] m-4">
                <motion.div
                key={item.mal_id}
                className="relative h-full w-full grid"
                style={{
                  backgroundImage: `url(${item.images.jpg.large_image_url})`,
                  backgroundSize: 'cover',
                }}
              >
                <button class="absolute w-[2.5rem] justify-self-end mr-2 border-2 border-t-0 border-[#5700ae] rounded-b-full text-4xl aspect-square text-white bg-[#5700ae] hover:bg-[#00000000] transition-colors duration-200">+</button>
                <div class="w-full grid bg-gradient-to-t from-[#000000e7] via-[#000000cb] to-[#00000000] h-40 self-end left-0 right-0 bottom-0 group-hover:h-full group-hover:bg-[#00000073] transition-all duration-300 p-[1rem] pt-[5rem]">
                  <div class="grid grid-flow-col h-fit">
                    <h1 class="text-white text-xl justify-self-start h-[3.5rem] text-ellipsis-2 overflow-clip w-[70%]">{item.title}</h1>
                    <div class="text-[#cf0082] text-[1.2rem] grid grid-flow-col m-0 p-0 justify-self-end items-center"><span class="w-fit mr-2 m-0 p-0">{(item.score/2).toFixed(1)}</span><img class="self-center" src={star}/></div>
                  </div>
                  <div class="w-full h-fit self-start overflow-hidden hidden group-hover:block">
                    <p class="text-white h-[15rem] text-ellipsis-10">{item.synopsis}</p>
                  </div>
                </div>
              </motion.div>
              </div>
            ))
          )}
        </motion.div>
        <motion.button
          onClick={scrollRight}
          className="absolute justify-self-end self-center bg-gradient-to-l from-[#000000] via-[#000000] to-[#00000000] text-white w-[10rem] h-[33rem] text-[2rem] hidden md:block"
        >
          &gt;
        </motion.button>
      </motion.div>
    </div>
  );
}
