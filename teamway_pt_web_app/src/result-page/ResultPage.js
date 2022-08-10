import React from 'react';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

ResultPage.propTypes = {};

function ResultPage() {
	return (
		<div className="flex-fill container-fluid d-flex flex-column justify-content-center align-items-center">
			<div className="row w-100">
				<div className="col d-flex flex-column justify-content-center align-items-center border-end">
					<p className="text-secondary fw-light">you are more of an</p>
					<h1 className="display-1 text-primary fw-normal">Extrovert</h1>
				</div>
				<div className="col">
					<p>you tend to…</p>
					<ul>
						<li>Be primarily interested in and concerned with the external world.</li>
						<li>Gain energy from socializing and being “out and about.”</li>
						<li>Find your energy is depleted when you spend too much time alone.</li>
						<li>Prefer talking with someone rather than sitting alone and thinking.</li>
						<li>Think as you speak.</li>
						<li>Express yourself well verbally.</li>
						<li>May seem “always on the go.”</li>
						<li>May come across as confident, friendly, and assertive.</li>
					</ul>
				</div>
			</div>
			<div className="row w-100">
				<div className="col d-flex flex-column justify-content-center align-items-center border-end">
					<p className="text-secondary fw-light">you are more of an</p>
					<h1 className="display-1 text-primary fw-normal">Introvert</h1>
				</div>
				<div className="col">
					<p>you tend to…</p>
					<ul>
						<li>Look at life from the inside out.</li>
						<li>Gain energy through inner reflection and solitude.</li>
						<li>Get more excited by ideas than by external activities.</li>
						<li>Prefer a few deep, close relationships to many casual ones.</li>
						<li>Feel tired and drained after socializing, even if you enjoyed it.</li>
						<li>Listen well and expect others to do the same.</li>
						<li>Think first and talk later.</li>
						<li>Express yourself well in writing.</li>
					</ul>
				</div>
			</div>
			<div className="row w-100 mt-5">
				<div className="col d-flex flex-column justify-content-center align-items-center">
					<p>Share your result!</p>
					<button className="btn btn-outline-dark rounded-0 border-0" type="button">
						<FontAwesomeIcon icon={solid('clipboard')} className={'me-1'}/> Copy Results to Clipboard
					</button>
				</div>
			</div>
		</div>
	);
}

export default ResultPage;