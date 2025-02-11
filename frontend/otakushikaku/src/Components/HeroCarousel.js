import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import Rating from "./Rating";
import { heroIndex } from "../Actions/heroIndex";
import { useDispatch, useSelector } from "react-redux";
import star from '../Assets/Images/star.png'

export default function HeroCarousel(props) {
  const dispatch = useDispatch();
  const heroState = useSelector(state => state.heroIndex.animeIndex);
  const carouselRef = useRef(null);

  const handleChangeIndex = (idx) => {
    dispatch(heroIndex(idx));
  };

  const scrollToIndex = (index) => {
    const carousel = carouselRef.current;
    const itemWidth = carousel.offsetWidth;
    carousel.scrollTo({
      left: itemWidth * index,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleChangeIndex((heroState + 1) % props.anime.length);
    }, 25000); 
    return () => clearInterval(interval); 
  }, [heroState, props.anime.length]);

  useEffect(() => {
    scrollToIndex(heroState);
  }, [heroState]);

  const buttonVariants = {
    normal: { 
      width: "8px", 
      borderRadius: "50%",
    },
    active: { 
      width: "50px", 
      borderTopLeftRadius: "9999px",
      borderTopRightRadius: "9999px",
      borderBottomLeftRadius: "9999px",
      borderBottomRightRadius: "9999px",
    },
  };

  return (
    <motion.div className="text-white font-economica m-[10rem]">
      <div 
        ref={carouselRef} 
        className="flex overflow-hidden w-full"
        style={{ scrollBehavior: 'smooth' }}
      >
        {props.anime.map((anime, index) => (
          <div key={index} className="flex-none w-full md:h-[32rem] h-[35rem] justify-center items-center flex">
            <div className="grid self-center justify-self-center md:hidden w-[25rem] h-[35rem] relative">
              <div className="grid md:hidden self-center justify-self-center w-[23rem] h-[32rem]" style={{backgroundImage: `url(${anime.images.jpg.large_image_url})`, backgroundSize: 'cover'}}>
              <div class="w-full grid bg-gradient-to-t from-[#000000e7] via-[#000000cb] to-[#00000000] h-40 self-end left-0 right-0 bottom-0 p-[1rem] pt-[5rem]">
                  <div class="grid grid-flow-col">
                    <h1 class="text-white text-2xl justify-self-start h-[3.5rem] text-ellipsis-2 overflow-clip">{anime.title}</h1>
                    <div class="text-[#cf0082] text-[1.5rem] h-fit grid grid-flow-col m-0 p-0 justify-self-end items-start"><span class="w-fit mr-2 m-0 p-0">{(anime.score/2).toFixed(1)}</span><img class="self-center" src={star}/></div>
                  </div>
                </div>
              </div>
              <div className="bottom-0 mt-2 w-full flex justify-center space-x-2 pb-4">
                  <motion.button className="bg-[#5700ae] w-[6rem] h-[2.5rem] rounded-lg">WATCH</motion.button>
                  <motion.button className="border-[#5700ae] border-2 w-[6rem] h-[2.5rem] rounded-lg">ADD TO LIST</motion.button>
                </div>
            </div>
            <motion.img
              className="md:block hidden"
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
            />
            <motion.div className="md:flex md:flex-col justify-between ml-5 h-full items-start hidden">
              <div>
                <motion.h2 className="lg:text-[2.5vw]">{anime.title_english}</motion.h2>
                <motion.p className="lg:text-[1.4vw]">{anime.synopsis}</motion.p>
              </div>
              <Rating className="sm:hidden md:block" dimension="1.5vw" rating={(anime.score) / 2} />
              <div className="flex space-x-2 self-start">
                <motion.button className="bg-[#5700ae] w-[6rem] h-[2.5rem] rounded-lg">WATCH</motion.button>
                <motion.button className="border-[#5700ae] border-2 w-[6rem] h-[2.5rem] rounded-lg">ADD TO LIST</motion.button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      
      <div className="md:mt-20 mt-10 flex w-full justify-center">
        {props.anime.map((anime, index) => (
          <motion.button
            key={index}
            onClick={() => handleChangeIndex(index)}
            variants={buttonVariants}
            initial="normal"
            animate={heroState === index ? "active" : "normal"}
            className="border-[2px] bg-none hover:bg-[#cf008290] border-[#cf0082] h-2 m-2 overflow-hidden transition-colors duration-300"
          >
            {(heroState === index) && (
              <motion.div 
                className="h-full bg-[#cf0083d0]" 
                initial={{ width: 0 }} 
                animate={{ width: '100%' }} 
                transition={{ duration: 25, ease: 'linear' }}
              ></motion.div>
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
