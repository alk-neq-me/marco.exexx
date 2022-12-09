import React from 'react';

const FooterM: React.FC = () => {
	return <React.Fragment>
		<footer className="text-center text-sm dark:text-white">&copy; {(new Date).getFullYear()} <a href="/">Aung Koko Lwin</a>.</footer>
	</React.Fragment>
}

export default FooterM;