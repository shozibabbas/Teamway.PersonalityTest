import React from 'react';

function ExtrovertResult() {
	return (
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
	);
}

export default ExtrovertResult;