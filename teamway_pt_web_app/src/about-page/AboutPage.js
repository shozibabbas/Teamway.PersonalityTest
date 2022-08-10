import React from 'react';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function AboutPage() {
	return (
		<div className="flex-fill d-flex flex-column justify-content-center align-items-center">
			<h1 className="display-1 text-primary fw-normal">Sayyed Shozib Abbas</h1>
			<p>4+ years of professional web development experience</p>
			<p><small>7+ years of overall development</small></p>
			<p><a href="tel:+923319849845">+92 331 984 9845</a></p>
			<p><a href="mailto:shozibabbas@gmail.com">shozibabbas@gmail.com</a></p>
			<a className="btn btn-outline-primary mt-2" href="#">
				<FontAwesomeIcon icon={solid('arrow-left')} className={'me-1'}/>Go back
			</a>

		</div>
	);
}

export default AboutPage;