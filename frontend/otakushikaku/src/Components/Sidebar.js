import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import logo from '../Assets/Images/logo.png'
import Search from '../Screens/Search';
import Home from '../Screens/Home';
import { useState } from 'react';

export default function Navbar() {
    const navItems_1 = ["Home", "Search"];
    const navItems_2 = ["My List", "About"];
    const navItems = [...navItems_1, ...navItems_2];
    const navURLS = ["/", "/search", "/my-list", "/about"];
    const [isOpen, setOpen] = useState(false);

    return (
        <motion.div className="bg-gradient-to-b from-[#000000] via-[#000000d8] to-[#00000000] w-screen h-20 grid grid-flow-col items-center text-white font-economica fixed z-50">
            <div className="absolute ml-10 md:mt-0 mt-7 md:hidden block z-[75]">
                <Hamburger size={25} className="justify-self-start" toggled={isOpen} toggle={setOpen} />
            </div>
            <div className="grid grid-flow-col self-center justify-center">
                <motion.ul className="items-center md:flex hidden">
                    {navItems_1.map((item, index) => (
                        <motion.li key={index} className="m-14 text-[1.5em] hover:text-[#B40071] transition-all duration-150">
                            <NavLink to={navURLS[index]}>{item}</NavLink>
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.img className="w-[3rem] h-[3rem] self-center md:m-0 mt-7" src={logo} />
                <motion.ul className="items-center md:flex hidden">
                    {navItems_2.map((item, index) => (
                        <motion.li key={index} className="m-14 text-[1.5rem] hover:text-[#B40071] transition-all duration-150">
                            <NavLink to={navURLS[index + navItems_1.length]}>{item}</NavLink>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, top: 0, borderRadius: '50%' }}
                        animate={{ height: '50rem', borderRadius: 0 }}
                        exit={{ height: 0, top: 0, borderRadius: '50%' }}
                        transition={{ duration: 0.5, ease: 'circInOut' }}
                        className="absolute w-screen bg-black z-55 grid grid-flow-row justify-center items-center"
                    >
                        <ul className="text-center text-3xl">
                            {navItems.map((item, idx) => (
                                <motion.li className="m-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} key={idx}>
                                    <NavLink to={navURLS[idx]}>{item}</NavLink>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
