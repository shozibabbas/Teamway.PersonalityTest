import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';

QuizPage.propTypes = {};

const pageVariants = {
	initial: {
		opacity: 0
	},
	in: {
		opacity: 1
	},
	out: {
		screenLeft: -1000
	}
};

const pageTransition = {
	type: 'tween',
	ease: 'linear',
	duration: 0.5
};

function QuizPage() {
	const {pathname} = useLocation();

	return (
		<div className="w-100 flex-fill d-flex flex-row justify-content-center">
			<motion.div
				key={pathname}
				initial="initial"
				animate="in"
				variants={pageVariants}
				transition={pageTransition}
				className={'w-75 d-flex flex-column'}
			>
				<Outlet/>
			</motion.div>
		</div>
	);
}

export default QuizPage;