import React from 'react';
import {FiSun} from 'react-icons/fi';
import {IoMdMoon} from 'react-icons/io';
import {AnimatePresence, motion} from 'framer-motion';

interface Props {
	theme: "light"|"dark",
	toggleTheme: () => void
}

const Nav: React.FC<Props> = (props) => {
	const {theme, toggleTheme} = props;
	
	return <nav className="flex justify-end backdrop-blur-sm px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 dark:text-gray-900">
		<div className="flex flex-wrap gap-2 md:px-[200px]">
		
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					style={{display: 'inline-block'}}
					initial={{y:-20, opacity:0}}
					key={theme}
					animate={{y:0, opacity:1}}
					exit={{y:20, opacity: 0}}
					transition={{duration: 0.2}}
				>
					<button 
						className="bg-purple-500 hover:bg-purple-700 dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-gray-900 text-white font-bold py-3 px-3 rounded-lg"
						onClick={toggleTheme}
					>
						{theme === "dark" ? <FiSun size={20} /> : <IoMdMoon size={20} />}
					</button>
				</motion.div>
			</AnimatePresence>
		</div>
		
	</nav>
}

export default Nav;
