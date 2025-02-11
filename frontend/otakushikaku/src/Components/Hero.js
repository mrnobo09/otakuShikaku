import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import axios from "axios";
import HeroCarousel from "./HeroCarousel";
import { useSelector } from "react-redux";

export default function Hero() {
    const [recAnime, setRecAnime] = useState(null);
    const heroState = useSelector(state => state.heroIndex.animeIndex);
    
    useEffect(() => {
        const fetchAnime = async () => {

            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            try {
                const response = await axios.get(`http://127.0.0.1:5000/top`, config);
                setRecAnime(response.data.slice(0,4));
                console.log(recAnime)
            } catch (err) {
                console.log(err);
            }
        };

        fetchAnime();
    }, []);

    return (
        <motion.div className="relative w-screen h-[100vh] bg-black grid justify-center overflow-clip">
            <motion.div className="absolute bg-[#00000070] w-full h-[100vh] grid">
                <motion.div className="bg-gradient-to-t from-[#00000000] via-[#00000098] to-[#000000] h-[20vh] self-start"></motion.div>
                <motion.div className="bg-gradient-to-r w-full from-[#000000] via-[#00000000] to-[#00000000] h-[100vh] absolute grid justify-center items-center">
                    {recAnime && (
                        <HeroCarousel anime = {recAnime}/>
                    )}
                </motion.div>
                <motion.div className="w-full bg-gradient-to-b from-[#00000000] via-[#00000098] to-[#000000] h-[20vh] self-end"></motion.div>
            </motion.div>
            {recAnime && recAnime[heroState].trailer && recAnime[heroState].trailer.embed_url ? (
                <iframe
                    src={recAnime[heroState].trailer.embed_url + '&loop=1&controls=0&mute=1&rel=0'}
                    allow="autoplay;"
                    className="min-w-[130rem] min-h-[130vh]"
                ></iframe>
            ) : (
                <p>Trailer not available</p>
            )}
        </motion.div>
    );
}
